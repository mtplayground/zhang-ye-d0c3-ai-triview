import type { LucideIcon } from 'lucide-react';

type ColumnHeaderProps = {
  Icon: LucideIcon;
  label: string;
  tone: 'ux' | 'hardware-software' | 'trending-now';
};

export default function ColumnHeader({ Icon, label, tone }: ColumnHeaderProps) {
  return (
    <header className={`column-header column-header--${tone}`}>
      <span className="column-header__icon" aria-hidden="true">
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <span className="column-header__label">{label}</span>
    </header>
  );
}
