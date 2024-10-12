import React, { useRef } from 'react';
import { IProduct } from '~/modules/modules';
import useStore from '~/store/store';

function CatalogItem({ product }: { product: IProduct }) {
 const openPopup = useStore((s) => s.showPopupMore);
 const controlCount = useStore((s) => s.countControls);
 const cartProducts = useStore((s) => s.cart);
 const addCart = useStore((s) => s.addToCart);
 const controlItem = useRef<HTMLDivElement | null>(null);
 const showPopupHandler = (e: React.MouseEvent) => {
  if ((e.target as HTMLElement).closest('div') === controlItem.current) return;
  openPopup(product.id);
 };

 return (
  <li
   id={product.id.toString()}
   className="flex flex-col border rounded-[10px] p-[10px] cursor-pointer"
   onClick={showPopupHandler}
  >
   <span className="text-center mb-[15px]">{product.title}</span>
   <div className="flex-grow flex flex-col items-center justify-end mb-[20px]">
    <img
     className="self-center w-full h-[150px] flex aspect-[1] object-contain object-center"
     src={product.image}
     alt=""
     loading="lazy"
    />
   </div>
   <div className="flex items-center justify-between text-[25px]">
    <span className="flex items-center">
     <span className="text-[36px] text-[orange]">&#9733;</span>
     {product.rating.rate}
    </span>
    <span className="">{product.price}$</span>
   </div>
   <p
    className={`text-[18px] text-center mb-[10px] ${
     product.maxCount === 0 ? 'text-[red]' : ''
    }`}
   >
    Left in stock: <span className="font-600">{product.maxCount}</span>
   </p>
   <div
    ref={controlItem}
    className="flex items-center justify-center gap-[10px]"
   >
    <button
     onClick={() => controlCount(product.id)}
     className="w-[20px] h-[20px] flex justify-center items-center rounded-full text-[20px] text-[white] bg-[black]"
    >
     -
    </button>
    <button
     onClick={() => addCart(product)}
     className={`flex items-center gap-[10px] text-[white] bg-[green] rounded-[5px] p-[5px_10px] ${
      cartProducts.find((el) => el.id === product.id) ? '!bg-[#2f2f2f]' : ''
     }`}
    >
     <span className="text-[18px] font-500 min-w-[30px]">{product.count}</span>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
     >
      {cartProducts.find((el) => el.id === product.id) && (
       <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
      )}
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
     </svg>
    </button>
    <button
     onClick={() => controlCount(product.id, true)}
     className="w-[20px] h-[20px] flex justify-center items-center rounded-full text-[20px] text-[white] bg-[black]"
    >
     +
    </button>
   </div>
  </li>
 );
}

export default CatalogItem;
