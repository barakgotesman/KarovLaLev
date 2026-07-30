import Input from '../../components/ui/Input';

interface PlayerNamesFormProps {
  names: [string, string];
  onChange: (names: [string, string]) => void;
}

export default function PlayerNamesForm({ names, onChange }: PlayerNamesFormProps) {
  return (
    <div className="w-full flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
        <label
          htmlFor="player-name-1"
          className="text-[12px] font-semibold tracking-[0.05em] text-on-surface-variant/70 text-right"
        >
          השם שלי
        </label>
        <Input
          id="player-name-1"
          placeholder="איך לקרוא לך?"
          value={names[0]}
          onChange={(e) => onChange([e.target.value, names[1]])}
        />
      </div>
      <div className="flex flex-col gap-xs">
        <label
          htmlFor="player-name-2"
          className="text-[12px] font-semibold tracking-[0.05em] text-on-surface-variant/70 text-right"
        >
          השם של בן/בת הזוג
        </label>
        <Input
          id="player-name-2"
          placeholder="ואיך לקרוא לו/לה?"
          value={names[1]}
          onChange={(e) => onChange([names[0], e.target.value])}
        />
      </div>
    </div>
  );
}
