export type Category =
  | 'עבר'
  | 'זוגיות'
  | 'חלומות'
  | 'שאיפות'
  | 'לימודים'
  | 'פחדים'
  | 'חוויות'
  | 'אקסטרים'
  | 'רגשות'
  | 'ערכים'
  | 'דמיון/מה אם'
  | 'חושניות'
  | 'עתיד משותף'
  | 'הומור/קלילות'
  | 'חרטות';

export interface Card {
  id: string;
  text: string;
  category: Category;
  depth: 1 | 2 | 3 | 4;
  isAdult: boolean;
  tags?: string[];
}

export type Screen = 'welcome' | 'game' | 'end';

export interface GameState {
  screen: Screen;
  isAdultEnabled: boolean;
  turnNumber: number;
  currentPlayer: 1 | 2;
  drawnCardIds: string[];
  currentCard: Card | null;
}
