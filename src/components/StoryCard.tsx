type StoryCardProps = {
  source: string;
  summary: string;
  title: string;
};

export default function StoryCard({ source, summary, title }: StoryCardProps) {
  return (
    <article className="story-card">
      <p className="story-card__source">{source}</p>
      <h2 className="story-card__title">{title}</h2>
      <p className="story-card__summary">{summary}</p>
    </article>
  );
}
