export interface IStore {
 products: Array<IProduct>;
 resetProducts: Array<IProduct>;
 popupMore: {
  open: boolean;
  data: IProduct | null;
 };
 getProducts: () => void;
 showPopupMore: (id: number) => void;
 closePopupMore: () => void;
 countControls: (id: number, increment?: boolean) => void;
}

export interface ICartSlice {
 cart: Array<IProduct>;
 addToCart: (product: IProduct) => void;
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
 count?: number;
 maxCount?: number;
}
