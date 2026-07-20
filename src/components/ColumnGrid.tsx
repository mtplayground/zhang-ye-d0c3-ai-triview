const dimensions = [
  { key: 'ux', label: 'UX' },
  { key: 'hardware-software', label: 'Hardware & Software' },
  { key: 'trending-now', label: 'Trending Now' },
] as const;

export default function ColumnGrid() {
  return (
    <div className="column-grid" aria-label="AI story dimensions">
      {dimensions.map((dimension) => (
        <section
          className="story-column"
          key={dimension.key}
          aria-label={dimension.label}
        />
      ))}
    </div>
  );
}
