import { create } from 'zustand';
import { IStore } from '~/modules/modules';
import { IProduct } from '~/modules/modules';

const useStore = create<IStore>((set, get) => ({
 products: {
  data: [],
 },
 popupMore: {
  open: false,
  data: null,
 },
 getProducts: async () => {
  function random(min: number, max: number) {
   return Math.floor(Math.random() * (max - min) + min);
  }
  try {
   const response = await fetch('https://fakestoreapi.com/products');
   const result = await response.json();
   const newResult = result.map((el: IProduct) => {
    el.count = 1;
    el.maxCount = random(5, 15);
    return el;
   });
   set((state) => ({
    products: {
     ...state.products,
     data: [...newResult],
    },
   }));
  } catch (err: unknown) {
   console.error(err);
  }
 },
 showPopupMore(id) {
  const findItemId = get().products.data.findIndex((item) => item.id === id);
  set((state) => ({
   popupMore: {
    ...state.popupMore,
    open: true,
    data: get().products.data[findItemId],
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
  const product = get().products.data.find((el) => el.id === id);
  set((state) => ({
   products: {
    data: state.products.data.map((el) => {
     if (el === product) {
      if (increment) {
       if (el.maxCount === 0) {
        return el;
       } else {
        el.count!++;
        el.maxCount!--;
       }
      } else {
       if (el.count === 1) {
        return el;
       } else {
        el.count!--;
        el.maxCount!++;
       }
      }
     }
     return el;
    }),
   },
  }));
 },
}));

export default useStore;
