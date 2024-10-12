import useStore from '~/store/store';

function Cart() {
 const cartProducts = useStore((s) => s.cart);

 return (
  <div className="">
   <div className="sticky top-[10px]">
    <div className="h-[calc(100dvh-300px)] overflow-y-auto">
     {cartProducts.map((product) => {
      return (
       <div className="border-b-[1px] p-[10px_0]" key={product.id}>
        <p className="text-[16px] text-center mb-[10px]">{product.title}</p>
        <div className="flex justify-between px-[15px]">
         <img src={product.image} className="w-[70px] h-[70px]" alt="" />
         <div className="flex flex-col items-end justify-center text-[16px]">
          <span className="flex items-center">
           <span className="text-[20px] text-[orange]">&#9733;</span>
           {product.rating.rate}
          </span>
          <span className="">{product.price}$</span>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </div>
 );
}

export default Cart;
