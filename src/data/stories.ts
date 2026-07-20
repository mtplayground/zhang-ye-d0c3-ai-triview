export type DimensionKey = 'ux' | 'hardware-software' | 'trending-now';

export type Story = {
  source: string;
  summary: string;
  title: string;
};

export const storiesByDimension: Record<DimensionKey, Story[]> = {
  ux: [
    {
      title: 'Design teams test calmer AI writing controls',
      source: 'UX Signals',
      summary: 'Prototype editors emphasize intent, tone, and revision history over chat-style prompting.',
    },
    {
      title: 'Assistive copilots move into research workflows',
      source: 'Interface Notes',
      summary: 'Participant tagging and synthesis tools are being tuned for traceable qualitative insights.',
    },
    {
      title: 'Voice agents get stricter handoff patterns',
      source: 'Product Design Weekly',
      summary: 'Teams are adding clearer escape routes when automated support needs a human operator.',
    },
    {
      title: 'AI settings shift from novelty to trust controls',
      source: 'Design Systems Review',
      summary: 'New preference panels focus on data use, personalization, and model behavior visibility.',
    },
  ],
  'hardware-software': [
    {
      title: 'Edge accelerators target laptop-class AI tasks',
      source: 'Compute Brief',
      summary: 'New neural processors are being positioned for local summarization and image generation.',
    },
    {
      title: 'Inference stacks optimize for smaller models',
      source: 'Model Systems',
      summary: 'Runtime teams are trading peak benchmark scores for faster startup and lower memory use.',
    },
    {
      title: 'Developer tools expose model routing controls',
      source: 'Platform Watch',
      summary: 'SDK updates make it easier to send lightweight tasks to cheaper or local models.',
    },
    {
      title: 'Robotics kits bundle vision-language APIs',
      source: 'AI Hardware Ledger',
      summary: 'Reference boards now ship with perception pipelines for navigation and inspection demos.',
    },
  ],
  'trending-now': [
    {
      title: 'Agent workflows become the default demo format',
      source: 'Trendline AI',
      summary: 'Launches increasingly show models planning, calling tools, and checking intermediate work.',
    },
    {
      title: 'Synthetic data debates move into procurement',
      source: 'Enterprise AI Desk',
      summary: 'Buyers are asking vendors to disclose generation methods and validation coverage.',
    },
    {
      title: 'AI video tools add more timeline controls',
      source: 'Creator Tech Report',
      summary: 'Editing products are shifting from single prompts toward shot-level direction and revision.',
    },
    {
      title: 'Search products blend answers with source panels',
      source: 'Discovery Briefing',
      summary: 'Teams are balancing direct responses with citations, comparison tables, and follow-up prompts.',
    },
  ],
};
