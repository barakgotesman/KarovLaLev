import Toggle from '../../components/ui/Toggle';

interface AgeToggleProps {
  isAdult: boolean;
  onChange: (isAdult: boolean) => void;
}

/** Wraps the shared Toggle with the "adult content" copy and semantics. */
export default function AgeToggle({ isAdult, onChange }: AgeToggleProps) {
  return (
    <div className="w-full flex flex-col gap-xs">
      <Toggle
        checked={isAdult}
        onChange={onChange}
        label={isAdult ? 'כן, גם קלפי 18+' : 'לא תודה, נשארים על הבטוח'}
      />
      <p className="px-md font-sans text-[12px] text-on-surface-variant/70 text-center">
        {isAdult ? 'לזוגיות שלא מפחדת מכנות' : 'רק השאלות הרגילות'}
      </p>
    </div>
  );
}
