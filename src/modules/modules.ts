export interface IStore {
 products: {
  data: Array<IProduct>;
 };
 popupMore: {
  open: boolean;
  data: IProduct | null;
 };
 getProducts: () => void;
 showPopupMore: (id: number) => void;
 closePopupMore: () => void;
}

export interface IProduct {
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
}
