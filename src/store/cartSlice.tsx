import { StateCreator } from 'zustand';
import { ICartSlice } from '~/modules/modules';

export const createCartSlice: StateCreator<ICartSlice> = (set, get) => ({
 cart: [],
 addToCart(product) {
  if (get().cart.find((el) => el.id === product.id)) {
   set((state) => ({
    cart: [...state.cart.filter((el) => el.id !== product.id)],
   }));
  } else {
   set((state) => ({
    cart: [{ ...product }, ...state.cart.filter((el) => el.id !== product.id)],
   }));
  }
 },
 removeProduct(product) {
  set((state) => ({
   cart: state.cart.filter((el) => el.id !== product.id),
  }));
 },
});
