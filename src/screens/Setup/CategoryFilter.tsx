import { CATEGORIES } from '../../data/categories';
import type { CategoryId } from '../../types';
import { getEligibleCards } from '../../utils/eligibleCards';

interface CategoryFilterProps {
  selected: CategoryId[];
  onChange: (selected: CategoryId[]) => void;
  isAdultEnabled: boolean;
}

/** Multi-select chip grid over the card bank's categories. An empty
 * selection means "no filter" — every category is eligible. */
export default function CategoryFilter({ selected, onChange, isAdultEnabled }: CategoryFilterProps) {
  const isFiltering = selected.length > 0;
  // Live preview of the resulting deck size, recomputed on every selection change.
  const eligibleCount = getEligibleCards(isAdultEnabled, selected).length;

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
      <p className="font-sans text-[12px] font-semibold text-primary text-center">
        {eligibleCount} קלפים יהיו במשחק
      </p>
      {!isFiltering && (
        <p className="font-sans text-[11px] text-on-surface-variant/60 text-center">
          לא בחרתם? אין בעיה – נביא לכם קלפים מכל הקטגוריות
        </p>
      )}
    </div>
  );
}
