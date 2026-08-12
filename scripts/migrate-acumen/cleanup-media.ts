import { getPayload } from 'payload'
import config from '@payload-config'

const run = async () => {
  const payload = await getPayload({ config })

  const referenced = new Set<number>()
  const pages = await payload.find({ collection: 'pages', limit: 1000, depth: 0 })

  for (const page of pages.docs) {
    if (page.hero?.media) referenced.add(Number(page.hero.media))
    if (page.meta?.image) referenced.add(Number(page.meta.image))
    for (const block of page.layout ?? []) {
      if (block.blockType === 'mediaBlock' && block.media) referenced.add(Number(block.media))
    }
  }

  const allMedia = await payload.find({ collection: 'media', limit: 1000, depth: 0 })
  const orphaned = allMedia.docs.filter((m) => !referenced.has(m.id))

  console.log(`${allMedia.docs.length} total media, ${referenced.size} referenced, ${orphaned.length} orphaned`)

  for (const doc of orphaned) {
    await payload.delete({ collection: 'media', id: doc.id, context: { disableRevalidate: true } })
  }

  console.log('Done!')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
