import type { CategoryId } from '../types';

/** All selectable categories, in the light-to-heavy order suggested by
 * CLAUDE.md, with their Hebrew display labels. Central source so category
 * names/ids are never hardcoded as raw values across components. */
export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 1, label: 'הומור וקלילות' },
  { id: 2, label: 'לימודים' },
  { id: 3, label: 'העבר' },
  { id: 4, label: 'חוויות' },
  { id: 5, label: 'חלומות' },
  { id: 6, label: 'שאיפות' },
  { id: 7, label: 'ערכים' },
  { id: 8, label: 'זוגיות' },
  { id: 9, label: 'רגשות' },
  { id: 10, label: 'דמיון ו"מה אם"' },
  { id: 11, label: 'עתיד משותף' },
  { id: 12, label: 'אקסטרים' },
  { id: 13, label: 'פחדים' },
  { id: 14, label: 'חרטות' },
  { id: 15, label: 'חושניות' },
];

/** Named ids for readability when authoring card content (data/cards.ts)
 * instead of scattering magic numbers through that file. */
export const CATEGORY_ID = {
  HUMOR: 1,
  STUDIES: 2,
  PAST: 3,
  EXPERIENCES: 4,
  DREAMS: 5,
  ASPIRATIONS: 6,
  VALUES: 7,
  RELATIONSHIP: 8,
  EMOTIONS: 9,
  IMAGINATION: 10,
  SHARED_FUTURE: 11,
  EXTREME: 12,
  FEARS: 13,
  REGRETS: 14,
  SENSUALITY: 15,
} as const satisfies Record<string, CategoryId>;
