import { create } from "zustand";

interface PassengersModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePassengersModal = create<PassengersModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePassengersModal;
