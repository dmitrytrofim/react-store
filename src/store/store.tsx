import { create } from 'zustand';
import { IStore } from '~/modules/modules';
import { IProduct } from '~/modules/modules';
import { createCartSlice } from '~/store/cartSlice';
import { ICartSlice } from '~/modules/modules';

const useStore = create<IStore & ICartSlice>()((set, get, api) => ({
 ...createCartSlice(set, get, api),
 products: [],
 resetProducts: [],
 popupMore: {
  open: false,
  data: null,
 },
 getProducts: async () => {
  try {
   const response = await fetch('https://fakestoreapi.com/products');
   const result = await response.json();
   const newResult = result.map((el: IProduct) => {
    el.count = 1;
    return el;
   });
   set(() => ({
    products: newResult,
    resetProducts: structuredClone(newResult),
   }));
  } catch (err: unknown) {
   console.error(err);
  }
 },
 showPopupMore(id) {
  const findItemId = get().products.findIndex((item) => item.id === id);
  set((state) => ({
   popupMore: {
    ...state.popupMore,
    open: true,
    data: get().products[findItemId],
   },
  }));
 },
 closePopupMore() {
  set((state) => ({
   popupMore: {
    ...state.popupMore,
    open: false,
   },
  }));
 },
 countControls(id, increment = false) {
  const product = get().products.find((el) => el.id === id);
  set((state) => ({
   products: state.products.map((el) => {
    if (el === product) {
     if (increment) {
      if (el.rating.count === 0) {
       return el;
      } else {
       el.count!++;
       el.rating.count!--;
       get().updateCountCart(el);
      }
     } else {
      if (el.count === 1) {
       return el;
      } else {
       el.count!--;
       el.rating.count!++;
       get().updateCountCart(el);
      }
     }
    }
    return el;
   }),
  }));
 },
 updateCountCart(el) {
  const findProduct = get().cart.find((prod) => prod.id === el.id);
  if (findProduct) {
   set((state) => ({
    cart: [
     { ...findProduct, count: el.count },
     ...state.cart.filter((prod) => prod.id !== el.id),
    ],
   }));
  }
 },
 sortPrice(val) {
  set((state) => ({
   products: [
    ...state.products.sort((a, b) =>
     val !== 'up' ? a.price - b.price : b.price - a.price
    ),
   ],
  }));
 },
 sortRating(val) {
  set((state) => ({
   products: [
    ...state.products.sort((a, b) =>
     val !== 'up'
      ? a.rating.rate - b.rating.rate
      : b.rating.rate - a.rating.rate
    ),
   ],
  }));
 },
}));

export default useStore;
