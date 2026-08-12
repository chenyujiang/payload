import type { Payload } from 'payload'

const EXT_TO_MIME: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  gif: 'image/gif',
}

const cache = new Map<string, number>()

export const downloadAndCreateMedia = async (
  payload: Payload,
  url: string,
  alt: string,
): Promise<number> => {
  const cached = cache.get(url)
  if (cached) return cached

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const data = Buffer.from(await res.arrayBuffer())
  const ext = url.split('.').pop()?.toLowerCase().split('?')[0] || 'png'
  const name = url.split('/').pop()?.split('?')[0] || `file-${Date.now()}.${ext}`

  const doc = await payload.create({
    collection: 'media',
    context: { disableRevalidate: true },
    data: { alt },
    file: {
      name,
      data,
      mimetype: EXT_TO_MIME[ext] || 'image/png',
      size: data.byteLength,
    },
  })

  cache.set(url, doc.id)
  return doc.id
}
