import type { StateCreator } from 'zustand';
import { ICartSlice } from '~/modules/modules';

export const createCartSlice: StateCreator<ICartSlice> = (set, get) => ({
 cart: [],
 addToCart(product) {
  console.log(get().products);
  if (get().cart.includes(product)) return;
  set((state) => ({
   cart: [...state.cart, product],
  }));
 },
});
