import { create } from 'zustand';

const UseStore2 = create((set) => ({
    cart: false,
    setCart: (value) => set(() => ({ cart: value })),
    toggleCart: () => set((state) => ({ cart: !state.cart })),
}));
export default UseStore2