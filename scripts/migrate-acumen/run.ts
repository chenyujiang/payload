import { createLocalReq, getPayload } from 'payload'
import config from '@payload-config'
import { richText } from './lexical'
import { downloadAndCreateMedia } from './media'
import { pages, type PageDef } from './pages'

const run = async () => {
  const payload = await getPayload({ config })
  const [user] = (await payload.find({ collection: 'users', limit: 1 })).docs
  const req = await createLocalReq({ user }, payload)

  const buildLayout = async (def: PageDef) => {
    const layout: any[] = []

    for (const section of def.sections) {
      if (section.type === 'media') {
        const mediaId = await downloadAndCreateMedia(payload, section.url, section.alt)
        layout.push({ blockType: 'mediaBlock', media: mediaId })
      } else {
        layout.push({
          blockType: 'content',
          columns: section.columns.map((col) => ({
            size: col.size,
            richText: richText(col.nodes),
          })),
        })
      }
    }

    if (def.cta) {
      layout.push({
        blockType: 'cta',
        richText: richText([
          { kind: 'h', level: 3, text: def.cta.heading },
          { kind: 'p', runs: [{ text: def.cta.body }] },
        ]),
        links: [{ link: { type: 'custom', appearance: 'default', label: def.cta.label, url: def.cta.url } }],
      })
    }

    return layout
  }

  const buildHero = async (def: PageDef) => {
    const hero: any = { type: def.heroType, richText: richText(def.heroNodes) }
    if (def.heroLinks) {
      hero.links = def.heroLinks.map((l) => ({
        link: { type: 'custom', appearance: l.appearance ?? 'default', label: l.label, url: l.url },
      }))
    }
    if (['highImpact', 'mediumImpact'].includes(def.heroType) && def.heroImageUrl) {
      hero.media = await downloadAndCreateMedia(payload, def.heroImageUrl, def.heroAlt ?? def.title)
    }
    return hero
  }

  for (const def of pages) {
    console.log(`Migrating /${def.slug}...`)
    const hero = await buildHero(def)
    const layout = await buildLayout(def)

    const data = {
      title: def.title,
      slug: def.slug,
      _status: 'published' as const,
      hero,
      layout,
      meta: { title: def.title, description: def.metaDescription },
    }

    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: def.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        context: { disableRevalidate: true },
        data,
      })
    } else {
      await payload.create({
        collection: 'pages',
        context: { disableRevalidate: true },
        data,
      })
    }
  }

  console.log('Updating header/footer nav...')

  const findPageId = async (slug: string) => {
    const res = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1 })
    return res.docs[0]?.id
  }

  await payload.updateGlobal({
    slug: 'header',
    context: { disableRevalidate: true },
    data: {
      navItems: [
        { link: { type: 'reference', label: 'Home', reference: { relationTo: 'pages', value: await findPageId('home') } } },
        { link: { type: 'reference', label: 'About Us', reference: { relationTo: 'pages', value: await findPageId('about-us') } } },
        { link: { type: 'reference', label: 'Services', reference: { relationTo: 'pages', value: await findPageId('services') } } },
        { link: { type: 'reference', label: 'Applications', reference: { relationTo: 'pages', value: await findPageId('applications') } } },
        { link: { type: 'reference', label: 'Our Partners', reference: { relationTo: 'pages', value: await findPageId('our-partners') } } },
        { link: { type: 'reference', label: 'Contact', reference: { relationTo: 'pages', value: await findPageId('contact') } } },
      ],
    },
  })

  await payload.updateGlobal({
    slug: 'footer',
    context: { disableRevalidate: true },
    data: {
      navItems: [
        { link: { type: 'reference', label: 'About Us', reference: { relationTo: 'pages', value: await findPageId('about-us') } } },
        { link: { type: 'reference', label: 'Services', reference: { relationTo: 'pages', value: await findPageId('services') } } },
        { link: { type: 'reference', label: 'Applications', reference: { relationTo: 'pages', value: await findPageId('applications') } } },
        { link: { type: 'reference', label: 'Our Partners', reference: { relationTo: 'pages', value: await findPageId('our-partners') } } },
        { link: { type: 'custom', label: 'Support', url: 'https://support.acumenonline.co.nz/', newTab: true } },
        { link: { type: 'reference', label: 'Contact', reference: { relationTo: 'pages', value: await findPageId('contact') } } },
      ],
    },
  })

  console.log('Done!')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
