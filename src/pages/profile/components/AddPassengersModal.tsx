import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import usePassengersModal from "@/store/usePassengersModal";
export default function AddPassengersModal() {
  const { isOpen, onClose } = usePassengersModal();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogOverlay className="bg-neutral-black opacity-70" />
      <DialogContent className="w-screen h-svh md:h-auto md:w-3/4">
        <DialogTitle className="text-center mt-3 text-primary">
          مسافرین خود را اضافه کنید
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
