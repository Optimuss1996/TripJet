import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  wasLoggedOut: boolean;
  setWasLoggedOut: (wasLoggedOut: boolean) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  wasLoggedOut: false,
  setWasLoggedOut: (wasLoggedOut) => set({ wasLoggedOut }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
