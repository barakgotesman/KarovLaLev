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

  // תוספת — שאלות היכרות קלילות נוספות
  { id: 'humor-5', text: 'מה הכי מצחיק אותך?', category: CATEGORY_ID.HUMOR, depth: 1, isAdult: false },
  { id: 'humor-6', text: 'מה התחביבים שלך?', category: CATEGORY_ID.HUMOR, depth: 1, isAdult: false },
  { id: 'humor-7', text: 'האם אתה אדם נקי או מבולגן?', category: CATEGORY_ID.HUMOR, depth: 1, isAdult: false },
  { id: 'humor-8', text: 'כמה זמן לוקח לך להתכונן בבוקר?', category: CATEGORY_ID.HUMOR, depth: 1, isAdult: false },

  { id: 'studies-5', text: 'מהו הספר האהוב עליך לקרוא?', category: CATEGORY_ID.STUDIES, depth: 1, isAdult: false },

  { id: 'past-5', text: 'מהי החופשה המשפחתית האהובה עליכם?', category: CATEGORY_ID.PAST, depth: 1, isAdult: false },
  { id: 'past-6', text: 'מה רצית להיות כשהיית קטן/ה?', category: CATEGORY_ID.PAST, depth: 1, isAdult: false },
  { id: 'past-7', text: 'מהו זיכרון הילדות האהוב עליך?', category: CATEGORY_ID.PAST, depth: 1, isAdult: false },
  { id: 'past-8', text: 'אם היית יכול/ה לחזור אחורה בזמן, לאיזו שנה היית נוסע/ת?', category: CATEGORY_ID.PAST, depth: 2, isAdult: false },
  { id: 'past-9', text: 'מי היה הקראש הראשון שלך?', category: CATEGORY_ID.PAST, depth: 2, isAdult: false },

  { id: 'dreams-5', text: 'מה היית עושה אם תזכה בהגרלה?', category: CATEGORY_ID.DREAMS, depth: 1, isAdult: false },
  { id: 'dreams-6', text: 'אם כסף לא היה שיקול, מה היית עושה כל היום?', category: CATEGORY_ID.DREAMS, depth: 2, isAdult: false },
  { id: 'dreams-7', text: 'אם היית יכול/ה לגור בכל מקום בעולם, איפה זה היה?', category: CATEGORY_ID.DREAMS, depth: 1, isAdult: false },

  { id: 'aspirations-5', text: 'מה ההישג הכי גאה שלך?', category: CATEGORY_ID.ASPIRATIONS, depth: 1, isAdult: false },
  { id: 'aspirations-6', text: 'איפה את/ה רואה את עצמך בעוד חמש שנים?', category: CATEGORY_ID.ASPIRATIONS, depth: 1, isAdult: false },
  { id: 'aspirations-7', text: 'מה מניע אותך לעבוד קשה?', category: CATEGORY_ID.ASPIRATIONS, depth: 2, isAdult: false },

  { id: 'values-5', text: 'איך החברים שלך היו מתארים אותך?', category: CATEGORY_ID.VALUES, depth: 1, isAdult: false },
  { id: 'values-6', text: 'את/ה יותר מופנם/ת או מוחצן/ת?', category: CATEGORY_ID.VALUES, depth: 1, isAdult: false },
  { id: 'values-7', text: 'מה היית משנה בעצמך אם היית יכול/ה?', category: CATEGORY_ID.VALUES, depth: 2, isAdult: false },

  { id: 'relationship-5', text: 'מה הדבר הכי מטורף שעשית בשם האהבה?', category: CATEGORY_ID.RELATIONSHIP, depth: 3, isAdult: false },

  { id: 'emotions-5', text: 'מי מכיר אותך הכי טוב, ולמה דווקא הוא/היא?', category: CATEGORY_ID.EMOTIONS, depth: 2, isAdult: false },

  { id: 'imagination-5', text: 'מי הגיבור שלך?', category: CATEGORY_ID.IMAGINATION, depth: 1, isAdult: false },
  { id: 'imagination-6', text: 'עם מי היית רוצה להיתקע באי בודד?', category: CATEGORY_ID.IMAGINATION, depth: 1, isAdult: false },
  { id: 'imagination-7', text: 'אם היית גיבור-על, אילו כוחות היו לך?', category: CATEGORY_ID.IMAGINATION, depth: 1, isAdult: false },
  { id: 'imagination-8', text: 'אילו שלושה פריטים היית לוקח/ת איתך לאי בודד?', category: CATEGORY_ID.IMAGINATION, depth: 1, isAdult: false },

  { id: 'extreme-5', text: 'מה הדבר הכי נועז שעשית אי פעם?', category: CATEGORY_ID.EXTREME, depth: 2, isAdult: false },

  { id: 'fears-5', text: 'מה הפחד הכי גדול שלך?', category: CATEGORY_ID.FEARS, depth: 2, isAdult: false },

  { id: 'regrets-5', text: 'אם היית יכול/ה לחזור אחורה בזמן כדי לשנות דבר אחד, מה זה היה?', category: CATEGORY_ID.REGRETS, depth: 3, isAdult: false },

  { id: 'sensuality-5', text: 'היה לך אי פעם מעריץ/ה סודי/ת?', category: CATEGORY_ID.SENSUALITY, depth: 2, isAdult: false },
  { id: 'sensuality-6', text: 'מתי היה הסקס הכי טוב שלך?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-7', text: 'מה התנוחה האהובה עלייך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-8', text: 'תפסו אותך פעם "על חם"?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-9', text: 'את/ה צופה בפורנו?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-10', text: 'כל כמה זמן את/ה מאונן/ת?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-11', text: 'מה ההגדרה שלך לסקס מדהים?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-12', text: 'מתי את/ה מרגיש/ה הכי סקסי/ת?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-13', text: 'יש סקס שעשינו שמדליק אותך מחדש כשאת/ה נזכר/ת בו?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-14', text: 'מה הייתה הפעם שעשינו סקס שהייתה בעיניך הכי מושלמת?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-15', text: 'מה הדרך שלך להתעורר מינית?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-16', text: 'איזה דבר לא-מיני מדליק אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-17', text: 'אם יכולת לעשות סקס בכל מקום בעולם, איפה זה היה ולמה?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-18', text: 'באיזה מקום, חוץ מחדר השינה, היית רוצה לעשות סקס?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-19', text: 'איזה משחק מקדים הכי מדליק אותך?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-20', text: 'מה החלק בגוף שלי שהכי מדליק אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-21', text: 'מה אני יכול/ה לעשות או להגיד כדי להדליק אותך במידית?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-22', text: 'הדלקתי אותך פעם כשהיינו בציבור? מתי, ומה עשה לך את זה?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-23', text: 'איפה את/ה הכי אוהב/ת שמנשקים אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-24', text: 'איפה את/ה לא אוהב/ת שמנשקים אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-25', text: 'אם יכולת לעשות סקס עם ידוען/ית, מי היית בוחר/ת ואיך היה הסקס איתו/איתה?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-26', text: 'מה הפנטזיה המינית המועדפת עליך, גם אם לא תרצו להגשים אותה?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-27', text: 'איזה סוג סרטי פורנו את/ה אוהב/ת לראות?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-28', text: 'על מה את/ה חושב/ת בזמן שאת/ה מאונן/ת?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-29', text: 'אם היינו יוצאים לחופשה סקסית, איך זה היה נראה?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-30', text: 'איזו מוזיקה או שיר סקסיים בעיניך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-31', text: 'מה תמיד רצית לנסות בסקס אבל הנחת שאני לא אאהב/אאהב?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-32', text: 'איזה קטע סקסי או ארוטי מסרט מחרמן אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-33', text: 'איך הטעם שלי בעיניך?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-34', text: 'איזה סוג מגע הכי מעורר אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-35', text: 'איפה היית רוצה שאגע בך כדי להדליק אותך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-36', text: 'מה "מכבה" אותך ומוריד לך את החשק?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-37', text: 'מה הדבר הכי מביך שקרה לך בסקס?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-38', text: 'האם יש לך שעה מועדפת ליחסי מין? אם כן, מהי?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-39', text: 'מה יותר מדליק בעיניך כמשחק מקדים: סקסטינג, או דיבור "מלוכלך" לפני הסקס?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-40', text: 'איזה סוג דיבור "מלוכלך" במיטה היה מדליק אותך שאני אגיד?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-41', text: 'ספר/י על האורגזמה הכי טובה שהייתה לך.', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-42', text: 'מה דעתך על התנסויות במשחקי תפקידים?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-43', text: 'ניסית, או היית רוצה לנסות, מולטי-אורגזמה או שפיכה נשית?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-44', text: 'מה דעתך על התנסויות במשחקי שליטה?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-45', text: 'את/ה מעדיף/ה להיות נשלט/ת או שולט/ת?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-46', text: 'ניסית, או היית רוצה לנסות, ספאנקינג?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-47', text: 'מה דעתך על התנסויות במין אנאלי?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-48', text: 'ניסית, או היית רוצה לנסות, סקס טנטרי?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-49', text: 'אילו צעצועי מין יש לך, ומה היית רוצה לנסות?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-50', text: 'היית רוצה שנקנה צעצוע מין לשנינו?', category: CATEGORY_ID.SENSUALITY, depth: 4, isAdult: true },
  { id: 'sensuality-51', text: 'מה היית משפר/ת בחיי הסקס שלנו?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-52', text: 'מתי הייתה הפעם האחרונה שעשית משהו נועז? מה זה היה?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-53', text: 'איזה לבוש סקסי הכי מדליק אותך? יש צבע מועדף?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-54', text: 'מה היית רוצה שאלבש למשחקי פיתוי?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-55', text: 'יש תנוחות סקס שמועדפות עליך?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-56', text: 'איזו תנוחת סקס היית רוצה לנסות?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-57', text: 'מה הדבר הכי טוב בחיי הסקס שלנו?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
  { id: 'sensuality-58', text: 'היית רוצה שנקרא ביחד פנטזיות או סיפור ארוטי?', category: CATEGORY_ID.SENSUALITY, depth: 3, isAdult: true },
];
