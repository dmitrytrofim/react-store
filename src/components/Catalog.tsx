import CatalogItem from '~/components/CatalogItem';
import useStore from '~/store/store';

function Catalog() {
 const products = useStore((s) => s.products);
 return (
  <ul className="grid grid-cols-3 gap-[10px] content-start">
   {products.map((item) => (
    <CatalogItem product={item} key={item.id} />
   ))}
  </ul>
 );
}

export default Catalog;
