import { create } from 'zustand';

 const useStore = create((set) => ({
  open: false,
  setOpen: (value) => set(() => ({ open: value })),
  toggleOpen: () => set((state) => ({ open: !state.open })),


}));
export default useStore