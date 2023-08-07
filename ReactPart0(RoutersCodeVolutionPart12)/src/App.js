import {Routes, Route} from 'react-router-dom'
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
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import UsersOutlet from './components/UsersOutlet';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<BaseComp/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='featured' element={<Featured/>}/>
      </Route>
      <Route path='users' element={<Users/>}/>
      <Route path='users/:name' element={<UserDetails/>}/>
      {/* Above we have to include the users in th epath because they are seperate routes, even though we concat them in our nav in users */}
      <Route path='usersOutlet' element={<UsersOutlet/>}>
          <Route path=':name' element={<UserDetails/>}/>
          {/* here we dont because the userdetail is a child of the userOutlet */}
      </Route>
      
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </div>
  );
}

export default App;

// yellow 10:4  , 9.5:4
// brown 