import type { Card } from '../types';
import { CATEGORY_ID } from './categories';

/** The static card bank — single source of truth for question content.
 * Structured as a flat array so a future remote-fetch layer only needs to
 * change how this array is populated, not how useGameSession consumes it. */
export const CARDS: Card[] = [
  // הומור וקלילות
  { id: 'humor-1', text: 'מה הדבר הכי מצחיק שקרה לך השבוע?', category: CATEGORY_ID.HUMOR, depth: 1, isAdult: false },
  { id: 'humor-2', text: 'איזה כינוי מצחיק היית נותן לי אם היינו מכירים היום בפעם הראשונה?', category: CATEGORY_ID.HUMOR, depth: 2, isAdult: false },
  { id: 'humor-3', text: 'מה המנהג הכי מוזר שיש לי שאת/ה בעצם אוהב/ת?', category: CATEGORY_ID.HUMOR, depth: 3, isAdult: false },
  { id: 'humor-4', text: 'אם היינו צריכים לתאר את הזוגיות שלנו כסרט קומדיה, מה היה שם הסרט?', category: CATEGORY_ID.HUMOR, depth: 4, isAdult: false },

  // לימודים
  { id: 'studies-1', text: 'מה הדבר האחרון שלמדת ושינה לך משהו בראש?', category: CATEGORY_ID.STUDIES, depth: 1, isAdult: false },
  { id: 'studies-2', text: 'איזה מקצוע בבית הספר היית רוצה ללמד היום?', category: CATEGORY_ID.STUDIES, depth: 2, isAdult: false },
  { id: 'studies-3', text: 'מה הדבר הכי משמעותי שלמדת ממני עד היום?', category: CATEGORY_ID.STUDIES, depth: 3, isAdult: false },
  { id: 'studies-4', text: 'איזה שיעור קשה בחיים למדת בזכות הזוגיות שלנו?', category: CATEGORY_ID.STUDIES, depth: 4, isAdult: false },

  // העבר
  { id: 'past-1', text: 'מה הזיכרון הראשון שעולה לך כשאתה חושב על הילדות שלך?', category: CATEGORY_ID.PAST, depth: 1, isAdult: false },
  { id: 'past-2', text: 'מה השיר שמחזיר אותך הכי חזק לתקופה מסוימת בעבר?', category: CATEGORY_ID.PAST, depth: 2, isAdult: false },
  { id: 'past-3', text: 'איזה רגע מהעבר היית רוצה לחוות שוב איתי?', category: CATEGORY_ID.PAST, depth: 3, isAdult: false },
  { id: 'past-4', text: 'מה הדבר מהעבר שלך שהכי קשה לך לספר לי עליו?', category: CATEGORY_ID.PAST, depth: 4, isAdult: false },

  // חוויות
  { id: 'experiences-1', text: 'מה החוויה הכי משוגעת שעברת השנה?', category: CATEGORY_ID.EXPERIENCES, depth: 1, isAdult: false },
  { id: 'experiences-2', text: 'איזו חוויה משותפת שלנו את/ה הכי אוהב/ת להיזכר בה?', category: CATEGORY_ID.EXPERIENCES, depth: 2, isAdult: false },
  { id: 'experiences-3', text: 'מה החוויה שהכי שינתה אותך כאדם?', category: CATEGORY_ID.EXPERIENCES, depth: 3, isAdult: false },
  { id: 'experiences-4', text: 'איזו חוויה עברת שאת/ה עדיין מעבד/ת רגשית?', category: CATEGORY_ID.EXPERIENCES, depth: 4, isAdult: false },

  // חלומות
  { id: 'dreams-1', text: 'מה החלום הכי מוזר שהיה לך לאחרונה?', category: CATEGORY_ID.DREAMS, depth: 1, isAdult: false },
  { id: 'dreams-2', text: 'אם היית יכול/ה לחלום כל לילה על מקום אחד, איפה זה היה?', category: CATEGORY_ID.DREAMS, depth: 2, isAdult: false },
  { id: 'dreams-3', text: 'מה החלום שאת/ה הכי פוחד/ת שלא יתגשם?', category: CATEGORY_ID.DREAMS, depth: 3, isAdult: false },
  { id: 'dreams-4', text: 'איזה חלום ישן שלך ויתרת עליו, ואיך זה מרגיש היום?', category: CATEGORY_ID.DREAMS, depth: 4, isAdult: false },

  // שאיפות
  { id: 'aspirations-1', text: 'מה היית עושה מחר אם היה לך יום פנוי לגמרי לעצמך?', category: CATEGORY_ID.ASPIRATIONS, depth: 1, isAdult: false },
  { id: 'aspirations-2', text: 'מה השאיפה הכי גדולה שלך לשנה הקרובה?', category: CATEGORY_ID.ASPIRATIONS, depth: 2, isAdult: false },
  { id: 'aspirations-3', text: 'איזו שאיפה שלך את/ה מפחד/ת לשתף כי היא נשמעת גדולה מדי?', category: CATEGORY_ID.ASPIRATIONS, depth: 3, isAdult: false },
  { id: 'aspirations-4', text: 'מה היית מוכן/ה לוותר עליו כדי להגשים את השאיפה הכי גדולה שלך?', category: CATEGORY_ID.ASPIRATIONS, depth: 4, isAdult: false },

  // ערכים
  { id: 'values-1', text: 'מה תכונה אחת שאת/ה הכי מעריך/ה אצל אנשים?', category: CATEGORY_ID.VALUES, depth: 1, isAdult: false },
  { id: 'values-2', text: 'מה הערך שהכי חשוב לך להעביר הלאה?', category: CATEGORY_ID.VALUES, depth: 2, isAdult: false },
  { id: 'values-3', text: 'מתי לאחרונה נאלצת לבחור בין ערך שחשוב לך לבין נוחות?', category: CATEGORY_ID.VALUES, depth: 3, isAdult: false },
  { id: 'values-4', text: 'איזה ערך שלך השתנה הכי הרבה מאז שאנחנו ביחד?', category: CATEGORY_ID.VALUES, depth: 4, isAdult: false },

  // זוגיות
  { id: 'relationship-1', text: 'מה הדבר הקטן שאני עושה/ת שגורם לך לחייך?', category: CATEGORY_ID.RELATIONSHIP, depth: 1, isAdult: false },
  { id: 'relationship-2', text: 'מה הרגע שבו הרגשת שאנחנו באמת צוות?', category: CATEGORY_ID.RELATIONSHIP, depth: 2, isAdult: false },
  { id: 'relationship-3', text: 'מה הדבר שהיית רוצה שנעשה יותר כזוג?', category: CATEGORY_ID.RELATIONSHIP, depth: 3, isAdult: false },
  { id: 'relationship-4', text: 'מה הפחד הכי גדול שלך לגבי הזוגיות שלנו?', category: CATEGORY_ID.RELATIONSHIP, depth: 4, isAdult: false },

  // רגשות
  { id: 'emotions-1', text: 'איזו תחושה מלווה אותך היום, גם אם קטנה?', category: CATEGORY_ID.EMOTIONS, depth: 1, isAdult: false },
  { id: 'emotions-2', text: 'מתי לאחרונה הרגשת פגיע/ה במיוחד?', category: CATEGORY_ID.EMOTIONS, depth: 2, isAdult: false },
  { id: 'emotions-3', text: 'איזה רגש את/ה הכי מתקשה להראות לי?', category: CATEGORY_ID.EMOTIONS, depth: 3, isAdult: false },
  { id: 'emotions-4', text: 'מה הרגע שבו הרגשת הכי לבד, גם כשלא היית באמת לבד?', category: CATEGORY_ID.EMOTIONS, depth: 4, isAdult: false },

  // דמיון ו"מה אם"
  { id: 'imagination-1', text: 'אם היית יכול/ה להיות דמות מסרט ליום אחד, מי היית בוחר/ת?', category: CATEGORY_ID.IMAGINATION, depth: 1, isAdult: false },
  { id: 'imagination-2', text: 'מה היית עושה אם היינו זוכים בטיול פתאומי מחר בבוקר?', category: CATEGORY_ID.IMAGINATION, depth: 2, isAdult: false },
  { id: 'imagination-3', text: 'מה היה קורה אם היינו מחליפים תפקידים ליום אחד?', category: CATEGORY_ID.IMAGINATION, depth: 3, isAdult: false },
  { id: 'imagination-4', text: 'אם היית יכול/ה לשנות החלטה אחת מהעבר המשותף שלנו, מה זה היה?', category: CATEGORY_ID.IMAGINATION, depth: 4, isAdult: false },

  // עתיד משותף
  { id: 'future-1', text: 'איפה היית רוצה שנהיה בעוד שנה?', category: CATEGORY_ID.SHARED_FUTURE, depth: 1, isAdult: false },
  { id: 'future-2', text: 'מה הפעילות שהיית רוצה שנתחיל לעשות ביחד בקרוב?', category: CATEGORY_ID.SHARED_FUTURE, depth: 2, isAdult: false },
  { id: 'future-3', text: 'איך את/ה מדמיין/ת אותנו בעוד עשר שנים?', category: CATEGORY_ID.SHARED_FUTURE, depth: 3, isAdult: false },
  { id: 'future-4', text: 'מה הכי מפחיד אותך לגבי העתיד שלנו ביחד?', category: CATEGORY_ID.SHARED_FUTURE, depth: 4, isAdult: false },

  // אקסטרים
  { id: 'extreme-1', text: 'מה הדבר הכי אקסטרימי שעשית אי פעם?', category: CATEGORY_ID.EXTREME, depth: 1, isAdult: false },
  { id: 'extreme-2', text: 'איזו פעילות אקסטרימית היית רוצה לנסות איתי?', category: CATEGORY_ID.EXTREME, depth: 2, isAdult: false },
  { id: 'extreme-3', text: 'מה הגבול שהיית מוכן/ה לחצות בשביל חוויה בלתי נשכחת?', category: CATEGORY_ID.EXTREME, depth: 3, isAdult: false },
  { id: 'extreme-4', text: 'מה הדבר הכי מסוכן שהיית מוכן/ה לעשות למעני?', category: CATEGORY_ID.EXTREME, depth: 4, isAdult: false },

  // פחדים
  { id: 'fears-1', text: 'ממה את/ה קצת נבהל/ת, גם אם זה נשמע מצחיק?', category: CATEGORY_ID.FEARS, depth: 1, isAdult: false },
  { id: 'fears-2', text: 'מה הפחד שמלווה אותך מגיל צעיר?', category: CATEGORY_ID.FEARS, depth: 2, isAdult: false },
  { id: 'fears-3', text: 'ממה את/ה הכי מפחד/ת בזוגיות שלנו?', category: CATEGORY_ID.FEARS, depth: 3, isAdult: false },
  { id: 'fears-4', text: 'מה הפחד הכי כבד שלך שעוד לא שיתפת אותי בו?', category: CATEGORY_ID.FEARS, depth: 4, isAdult: false },

  // חרטות
  { id: 'regrets-1', text: 'על איזו החלטה קטנה את/ה מתחרט/ת השבוע?', category: CATEGORY_ID.REGRETS, depth: 1, isAdult: false },
  { id: 'regrets-2', text: 'מה משהו שהיית רוצה לומר אחרת בעבר?', category: CATEGORY_ID.REGRETS, depth: 2, isAdult: false },
  { id: 'regrets-3', text: 'מה ההזדמנות שהכי מצטער/ת שהחמצת?', category: CATEGORY_ID.REGRETS, depth: 3, isAdult: false },
  { id: 'regrets-4', text: 'מה החרטה שהכי קשה לך לשאת?', category: CATEGORY_ID.REGRETS, depth: 4, isAdult: false },

  // חושניות — depth 3-4 marked isAdult, gated by the 18+ toggle
  { id: 'sensuality-1', text: 'מה הדבר הקטן שאני עושה שגורם לך להרגיש רצוי/ה?', category: CATEGORY_ID.SENSUALITY, depth: 1, isAdult: false },
  { id: 'sensuality-2', text: 'מה המחמאה שהכי גורמת לך להסמיק?', category: CATEGORY_ID.SENSUALITY, depth: 2, isAdult: false },
  { id: 'sensuality-3', text: 'מה הדבר שהיית רוצה שאני אעשה יותר כדי לגרום לך להרגיש נחשק/ת?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-4', text: 'מה הפנטזיה שעוד לא שיתפת איתי?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
];
