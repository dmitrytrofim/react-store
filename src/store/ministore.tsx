import { create } from 'zustand';
import { IStore } from '~/modules/modules';

const useStore = create<IStore>((set, get) => ({
 products: {
  data: [],
 },
 getProducts: async () => {
  try {
   const res = await fetch('https://fakestoreapi.com/products');
   const json = res.json();
   json.then((resolve) =>
    set((state) => ({
     products: {
      ...state.products,
      data: [...resolve],
     },
    }))
   );
   console.log(get().products);
  } catch (err: unknown) {
   console.error(err);
  }
 },
}));

export default useStore;
