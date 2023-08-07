import {Routes, Route} from '../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './nav/Navbar';
import Test from './components/Test';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import New from './components/New';
import Featured from './components/Featured';
import BaseComp from './components/BaseComp';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<BaseComp/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='featured' element={<Featured/>}/>
      </Route>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </div>
  );
}

export default App;

// yellow 10:4  , 9.5:4
// brown 