import CatalogItem from '~/components/CatalogItem';
import useStore from '~/store/store';

function Catalog() {
 const products = useStore((s) => s.products);
 return (
  <ul className="grid grid-cols-3 gap-[10px]">
   {products.data.map((item) => (
    <CatalogItem product={item} key={item.id} />
   ))}
  </ul>
 );
}

export default Catalog;
