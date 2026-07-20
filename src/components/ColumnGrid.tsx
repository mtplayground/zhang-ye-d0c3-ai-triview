import { Flame, MonitorCog, MousePointer2 } from 'lucide-react';
import ColumnHeader from './ColumnHeader';
import StoryCard from './StoryCard';
import { storiesByDimension, type DimensionKey } from '../data/stories';

const dimensions: Array<{
  Icon: typeof MousePointer2;
  key: DimensionKey;
  label: string;
}> = [
  { key: 'ux', label: 'UX', Icon: MousePointer2 },
  { key: 'hardware-software', label: 'Hardware & Software', Icon: MonitorCog },
  { key: 'trending-now', label: 'Trending Now', Icon: Flame },
];

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
          <div className="story-list" aria-label={`${dimension.label} stories`}>
            {storiesByDimension[dimension.key].map((story) => (
              <StoryCard
                key={`${story.source}-${story.title}`}
                source={story.source}
                summary={story.summary}
                title={story.title}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
