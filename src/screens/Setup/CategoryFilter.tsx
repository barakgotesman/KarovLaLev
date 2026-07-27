import { CATEGORIES } from '../../data/categories';
import type { CategoryId } from '../../types';

interface CategoryFilterProps {
  selected: CategoryId[];
  onChange: (selected: CategoryId[]) => void;
}

/** Multi-select chip grid over the card bank's categories. An empty
 * selection means "no filter" — every category is eligible. */
export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const isFiltering = selected.length > 0;

  function toggleCategory(id: CategoryId) {
    onChange(isFiltering && selected.includes(id) ? selected.filter((c) => c !== id) : [...selected, id]);
  }

  return (
    <div className="w-full flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <span className="font-sans text-[12px] font-semibold tracking-wide text-on-surface-variant">
          נושאים (לא חובה)
        </span>
        {isFiltering && (
          <button
            type="button"
            onClick={() => onChange([])}
            className="font-sans text-[11px] font-semibold text-primary cursor-pointer"
          >
            איפוס
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-xs">
        {CATEGORIES.map((category) => {
          const isActive = selected.includes(category.id);
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => toggleCategory(category.id)}
              className={`px-sm py-[6px] rounded-full text-[12px] font-sans font-semibold cursor-pointer border transition-colors ${
                isActive
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-transparent text-on-surface-variant border-secondary/30 hover:border-primary/50'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
