import { useEffect } from 'react';
import Cart from '~/components/Cart';
import Catalog from '~/components/Catalog';
import Container from '~/components/Container';
import Filters from '~/components/Filters';
import PopupMore from '~/components/PopupMore';
import useStore from '~/store/store';

function App() {
 const getProducts = useStore((s) => s.getProducts);

 useEffect(() => {
  getProducts();
 }, []);

 return (
  <div className="py-[20px]">
   <Container>
    <h1 className="text-[32px] font-700 text-center mb-[20px]">Mini-Store-2</h1>
    <div className="grid grid-cols-[200px_1fr_200px] gap-[10px]">
     <Filters />
     <Catalog />
     <Cart />
    </div>
   </Container>
   <PopupMore />
  </div>
 );
}

export default App;
