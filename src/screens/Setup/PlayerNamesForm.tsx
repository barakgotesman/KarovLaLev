import Input from '../../components/ui/Input';

interface PlayerNamesFormProps {
  names: [string, string];
  onChange: (names: [string, string]) => void;
}

export default function PlayerNamesForm({ names, onChange }: PlayerNamesFormProps) {
  return (
    <div className="w-full flex flex-col gap-md">
      <Input
        placeholder="שם שחקן/ית 1"
        value={names[0]}
        onChange={(e) => onChange([e.target.value, names[1]])}
      />
      <Input
        placeholder="שם שחקן/ית 2"
        value={names[1]}
        onChange={(e) => onChange([names[0], e.target.value])}
      />
    </div>
  );
}
