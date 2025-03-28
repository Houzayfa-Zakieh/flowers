import { create } from 'zustand';

const UseStore3 = create((set) => ({
    show: false,
    setShow: (value) => set(() => ({ show: value })),
    toggleShow: () => set((state) => ({ show: !state.show })),
}));
export default UseStore3