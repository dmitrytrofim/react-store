import { useEffect } from 'react';
import Container from '~/components/Container';
import useStore from '~/store/ministore';

function App() {
 const store = useStore();
 console.log(store.products.data[0]);

 useEffect(() => {
  store.getProducts();
 }, []);

 return (
  <div className="py-[10px]">
   <Container>
    <h1 className="text-[32px] font-700 text-center">Mini-Store</h1>
   </Container>
  </div>
 );
}

export default App;
