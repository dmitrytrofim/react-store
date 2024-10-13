import useStore from '~/store/store';

function Cart() {
 const cartProducts = useStore((s) => s.cart);
 const removeProduct = useStore((s) => s.removeProduct);

 return (
  <div className="">
   <span className="flex justify-center text-center text-[26px] font-700 mb-[10px]">
    Cart
   </span>
   <div className="sticky top-[10px] rounded-[10px] border">
    <div className="max-h-[calc(100dvh-240px)] overflow-y-auto">
     {cartProducts.map((product) => {
      return (
       <div
        key={product.id}
        className="relative [&:not(:last-child)]:border-b-[1px]"
       >
        <a
         href={`#${product.id}`}
         className="flex flex-col relative p-[20px_0_10px]"
        >
         <p className="text-[13px] text-center px-[5px] mb-[10px]">
          {product.title}
         </p>
         <div className="flex items-center justify-between gap-[10px] px-[15px]">
          <img
           src={product.image}
           className="w-[70px] h-[70px] object-contain object-center"
           alt=""
          />
          <div className="flex flex-col items-end justify-center text-[16px]">
           <span className="flex items-center">
            <span className="text-[20px] text-[orange]">&#9733;</span>
            {product.rating.rate}
           </span>
           <span className="flex flex-col items-end text-[17px] font-600 text-right">
            <span>{product.price}$</span>
            <span className="text-[12px]">Count: {product.count}</span>
           </span>
          </div>
         </div>
        </a>
        <button
         onClick={() => removeProduct(product)}
         type="button"
         className="absolute flex justify-center items-center text-[18px] w-[25px] h-[25px] top-0 right-[5px] cursor-pointer z-10"
        >
         &#10006;
        </button>
       </div>
      );
     })}
    </div>
    <div
     className={`flex flex-col items-center text-center text-[30px] py-[10px] ${
      cartProducts.length !== 0 ? 'border-t-[1px]' : ''
     }`}
    >
     <span className="font-700">Total</span>
     <span className="text-[26px] font-500">
      {cartProducts
       .reduce((acc, cur) => {
        return acc + cur.price * cur.count!;
       }, 0)
       .toFixed(2)}
      $
     </span>
    </div>
   </div>
  </div>
 );
}

export default Cart;
