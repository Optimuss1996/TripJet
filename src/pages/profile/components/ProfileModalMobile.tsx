import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import useProfileModalMobile from "@/store/useProfileMobileModal";
import Account from "./Account";

export default function ProfileModalMobile() {
  const { isOpen, onClose } = useProfileModalMobile();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : onClose())}>
      <DialogClose className="text-primary border border-primary p-1 rounded-md" />
      <DialogContent className="p-2  w-width-dynamic h-screen-dynamic max-w-none  overflow-y-auto">
        <DialogTitle className="text-center mt-3">
          ویرایش اطلاعات حساب
        </DialogTitle>
        <Account />
      </DialogContent>
    </Dialog>
  );
}
