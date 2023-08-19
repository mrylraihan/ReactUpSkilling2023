import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch()
  const cartIsVisible = useSelector(state => state.uiSlice.cartIsVisible)
  const notification = useSelector(state => state.uiSlice.notification)
  const cart = useSelector(state=>state.cartSlice)
  console.log(cart)
  console.log("test")
  useEffect(()=>{
    if (isInitial) {
      isInitial = false
      return;
    }else{
      dispatch(sendCartData(cart))
    }
  },[cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
     {cartIsVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
