import { create } from 'zustand';

type ModalType = 'privacy' | 'terms' | null;

interface LegalStore {
  modal: ModalType;
  openModal: (type: 'privacy' | 'terms') => void;
  closeModal: () => void;
}

export const useLegalStore = create<LegalStore>((set) => ({
  modal: null,
  openModal: (type) => set({ modal: type }),
  closeModal: () => set({ modal: null }),
}));
