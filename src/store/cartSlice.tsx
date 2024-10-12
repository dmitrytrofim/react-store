import { StateCreator } from 'zustand';
import { ICartSlice } from '~/modules/modules';

export const createCartSlice: StateCreator<ICartSlice> = (set, get) => ({
 cart: [],
 addToCart(product) {
  if (get().cart.includes(product)) return;
  set((state) => ({
   cart: [...state.cart, product],
  }));
 },
});
