import React, { useState } from 'react';

import './App.css';
import Cart from './components/Cart';
import CreateProduct from './components/CreateProduct';
import Products from './components/Products';
import CartContext from './store/cart-context';

const DummyData = [
  {name:'Jordan 3 fire red'},
  {name:'Jordan 3 dark iris'},
  {name:'Jordan 3 Mocha'},
  {name:'Jordan 3 Pine Green'},
]
function App() {
  const [products, setProducts]= useState(DummyData)
  const [cart, setCart] = useState([])
  

  return (
    <CartContext.Provider value={{ cart, setCart, products,setProducts }}>
    <div className="app">
      <Products/>
    </div>
    <div className='app'>
      <Cart/>
    </div>
    <div className='app'>
      <CreateProduct/>
    </div>
    </CartContext.Provider>
  );
}

export default App;
