import { IProduct } from '~/modules/modules';
import useStore from '~/store/store';

function CatalogItem({ product }: { product: IProduct }) {
 const showPopup = useStore((s) => s.showPopupMore);

 return (
  <li
   className="flex flex-col border rounded-[10px] p-[10px]"
   onClick={() => showPopup(product.id)}
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
  </li>
 );
}

export default CatalogItem;
