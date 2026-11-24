import raw from './photos.json'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const withBase = (p) => ({ ...p, src: base + p.src, thumb: base + p.thumb })

export default Object.fromEntries(Object.entries(raw).map(([k, list]) => [k, list.map(withBase)]))
