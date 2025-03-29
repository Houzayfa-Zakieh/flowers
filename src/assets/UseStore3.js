import { create } from 'zustand';

export const UseStore3 = create((set) => ({
    show: false,
    setShow: (value) => set(() => ({ show: value })),
    toggleShow: () => set((state) => ({ show: !state.show })),
}));
export const UseStore4 = create((set) => ({
    show1: false,
    setShow1: (value) => set(() => ({ show1: value })),
    toggleShow1: () => set((state) => ({ show1: !state.show1 })),
}));
export const UseStore5 = create((set) => ({
    show2: false,
    setShow2: (value) => set(() => ({ show2: value })),
    toggleShow2: () => set((state) => ({ show2: !state.show2 })),
}));