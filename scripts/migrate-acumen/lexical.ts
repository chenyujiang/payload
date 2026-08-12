// Minimal builders for Payload's lexical richText JSON shape, enough to cover
// headings, paragraphs (with optional inline links), and bullet lists as
// plain "• " paragraphs. Not a general lexical serializer.

type Run = { text: string; link?: { url: string; newTab?: boolean } }

type Node = { kind: 'h'; level: 1 | 2 | 3 | 4; text: string } | { kind: 'p'; runs: Run[] }

const textNode = (text: string) => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text,
  version: 1,
})

const linkNode = (text: string, url: string, newTab = false) => ({
  type: 'link',
  children: [textNode(text)],
  direction: 'ltr',
  fields: { linkType: 'custom', newTab, url },
  format: '',
  indent: 0,
  version: 2,
})

const headingNode = (level: 1 | 2 | 3 | 4, text: string) => ({
  type: 'heading',
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  tag: `h${level}`,
  version: 1,
})

const paragraphNode = (runs: Run[]) => ({
  type: 'paragraph',
  children: runs.map((r) => (r.link ? linkNode(r.text, r.link.url, r.link.newTab) : textNode(r.text))),
  direction: 'ltr',
  format: '',
  indent: 0,
  textFormat: 0,
  version: 1,
})

export const h = (level: 1 | 2 | 3 | 4, text: string): Node => ({ kind: 'h', level, text })
export const p = (text: string): Node => ({ kind: 'p', runs: [{ text }] })
export const pRuns = (runs: Run[]): Node => ({ kind: 'p', runs })
export const bullets = (items: string[]): Node[] => items.map((item) => p(`•  ${item}`))

export const richText = (nodes: Node[]) => ({
  root: {
    type: 'root',
    children: nodes.map((n) => (n.kind === 'h' ? headingNode(n.level, n.text) : paragraphNode(n.runs))),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})
