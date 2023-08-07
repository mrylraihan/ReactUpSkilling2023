import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import All from './components/Pages/All';
import People from './components/Pages/People';
import More from './components/Pages/More';
import About from './components/Pages/About';
import RootLayout from './components/Pages/RootLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home/>}/>
    <Route path='all'>
    <Route index element={<All/>}/>
    <Route path=':id' element={<People/>}/>
    </Route>
    <Route path='extra'>
    <Route index element={<More/>}/>
    <Route path='about' element={<About/>}/>
    </Route>
  </Route>
))
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
