// Decorative network diagram for the hero: routers linked together,
// with small packets travelling along the links (CSS offset-path).
const nodes = [
  { id: 'r1', x: 60, y: 70 },
  { id: 'r2', x: 220, y: 40 },
  { id: 'r3', x: 340, y: 150 },
  { id: 'r4', x: 150, y: 210 },
  { id: 'r5', x: 300, y: 290 },
  { id: 'fw', x: 90, y: 320 },
]

const links: [string, string][] = [
  ['r1', 'r2'],
  ['r2', 'r3'],
  ['r1', 'r4'],
  ['r4', 'r3'],
  ['r3', 'r5'],
  ['r4', 'fw'],
  ['fw', 'r5'],
]

const pos = Object.fromEntries(nodes.map((n) => [n.id, n]))
const path = ([a, b]: [string, string]) => `M${pos[a].x},${pos[a].y} L${pos[b].x},${pos[b].y}`

export function Topology({ label }: { label: string }) {
  return (
    <svg className="topology" viewBox="0 0 400 360" role="img" aria-label={label}>
      {links.map((l) => (
        <path key={l.join('-')} d={path(l)} className="topology-link" />
      ))}
      {[0, 3, 4, 6].map((i, k) => (
        <circle key={i} r="3" className="topology-packet" style={{ offsetPath: `path('${path(links[i])}')`, animationDelay: `${k * 1.1}s` }} />
      ))}
      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
          <rect x="-17" y="-17" width="34" height="34" rx="8" className="topology-node" />
          <text y="4" textAnchor="middle" className="topology-label">
            {n.id}
          </text>
        </g>
      ))}
    </svg>
  )
}
