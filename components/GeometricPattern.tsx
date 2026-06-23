/**
 * Brand line-motif: a lattice of interlocking triangles drawn with a fine
 * gradient stroke (after the TEMPLARS hero pattern). Decorative only and
 * aria-hidden; a precise geometric mark, not illustration.
 */
export function GeometricPattern({
  className = "",
  rows = 4,
  cols = 16,
}: {
  className?: string;
  rows?: number;
  cols?: number;
}) {
  const w = 64; // triangle base
  const h = 56; // triangle height
  const paths: string[] = [];
  for (let r = 0; r < rows; r++) {
    const offset = (r % 2) * (w / 2);
    for (let c = -1; c < cols; c++) {
      const x = c * w + offset;
      const y = r * h;
      paths.push(`M${x} ${y + h} L${x + w / 2} ${y} L${x + w} ${y + h}`);
    }
  }
  const width = cols * w;
  const height = rows * h;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <linearGradient id="cm-lattice" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d365c" />
          <stop offset="50%" stopColor="#33507a" />
          <stop offset="100%" stopColor="#e2c97e" />
        </linearGradient>
      </defs>
      <path
        d={paths.join(" ")}
        fill="none"
        stroke="url(#cm-lattice)"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
