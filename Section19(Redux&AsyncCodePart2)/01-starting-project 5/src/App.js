import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

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
    dispatch(uiActions.showNotification({status:'pending', title:'Sending...', message:'Sending Cart data!'}))

    fetch('https://testdata-7fb43-default-rtdb.firebaseio.com/cart.json', {method:'PUT',
    body:JSON.stringify(cart)})
    .then(res=>console.log(res))
      .then(() => dispatch(uiActions.showNotification({ status: 'success', title: 'Success...', message: 'Got Cart data!' })))
      .catch(() => dispatch(uiActions.showNotification({ status: 'error', title: 'Error...', message: 'Error on Cart data!' })))
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
