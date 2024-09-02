export interface IStore {
 products: {
  data: Array<{
   category: string;
   description: string;
   id: number;
   image: string;
   price: number;
   rating: {
    count: number;
    rate: number;
   };
   title: string;
  }>;
 };
 getProducts: () => void;
}
