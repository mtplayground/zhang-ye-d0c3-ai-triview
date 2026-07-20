import { Flame, MonitorCog, MousePointer2 } from 'lucide-react';
import ColumnHeader from './ColumnHeader';

const dimensions = [
  { key: 'ux', label: 'UX', Icon: MousePointer2 },
  { key: 'hardware-software', label: 'Hardware & Software', Icon: MonitorCog },
  { key: 'trending-now', label: 'Trending Now', Icon: Flame },
] as const;

export default function ColumnGrid() {
  return (
    <div className="column-grid" aria-label="AI story dimensions">
      {dimensions.map((dimension) => (
        <section
          className={`story-column story-column--${dimension.key}`}
          key={dimension.key}
          aria-label={dimension.label}
        >
          <ColumnHeader
            Icon={dimension.Icon}
            label={dimension.label}
            tone={dimension.key}
          />
          <div className="story-list" aria-label={`${dimension.label} stories`} />
        </section>
      ))}
    </div>
  );
}
