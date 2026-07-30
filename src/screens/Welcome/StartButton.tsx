import Button from '../../components/ui/Button';

interface StartButtonProps {
  onStart: () => void;
}

/** Primary CTA that begins the journey; the "breathing" pulse invites the tap. */
export default function StartButton({ onStart }: StartButtonProps) {
  return (
    <Button variant="primary" pulse onClick={onStart}>
      התחילו את השיחה
    </Button>
  );
}
