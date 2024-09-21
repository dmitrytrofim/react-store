import { create } from 'zustand';
import { IStore } from '~/modules/modules';

const useStore = create<IStore>((set, get) => ({
 products: {
  data: [],
 },
 popupMore: {
  open: false,
  data: null,
 },
 getProducts: async () => {
  try {
   const response = await fetch('https://fakestoreapi.com/products');
   const result = await response.json();
   set((state) => ({
    products: {
     ...state.products,
     data: [...result],
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
}));

export default useStore;
