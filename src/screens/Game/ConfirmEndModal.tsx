import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/ui/Button';

interface ConfirmEndModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

/** Confirmation dialog shown before actually ending the session, so an
 * accidental tap on the header's "X" doesn't cut the game short. */
export default function ConfirmEndModal({ open, onConfirm, onCancel }: ConfirmEndModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center px-gutter bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onCancel}
        >
          <motion.div
            className="w-full max-w-[320px] bg-surface-container rounded-2xl p-lg flex flex-col items-center gap-md text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-sans text-[18px] font-black text-primary">לסיים את המסע?</h2>
            <p className="font-sans text-[13px] leading-relaxed text-on-surface-variant">
              תוכלו תמיד להתחיל מסע חדש, אבל הסבב הנוכחי לא יישמר.
            </p>
            <div className="w-full flex flex-col gap-sm mt-xs">
              <Button variant="primary" onClick={onConfirm}>
                כן, לסיים
              </Button>
              <Button variant="ghost" onClick={onCancel}>
                להמשיך לשחק
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
