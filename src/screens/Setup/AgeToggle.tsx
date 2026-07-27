import Toggle from '../../components/ui/Toggle';

interface AgeToggleProps {
  isAdult: boolean;
  onChange: (isAdult: boolean) => void;
}

/** Wraps the shared Toggle with the "adult content" copy and semantics. */
export default function AgeToggle({ isAdult, onChange }: AgeToggleProps) {
  return <Toggle checked={isAdult} onChange={onChange} label="תוכן למבוגרים בלבד" />;
}
