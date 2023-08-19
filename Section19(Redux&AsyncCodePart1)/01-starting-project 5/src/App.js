import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {
  const cartIsVisible = useSelector(state => state.uiSlice.cartIsVisible)
  const cart = useSelector(state=>state.cartSlice)
  console.log(cart)

  useEffect(()=>{
    
    fetch('https://testdata-7fb43-default-rtdb.firebaseio.com/cart.json', {method:'PUT',
    body:JSON.stringify(cart)})
    
  },[cart])

  return (
    <Layout>
     {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
