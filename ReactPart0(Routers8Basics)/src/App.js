
import './App.css';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import More, { dataLoader } from './components/pages/More';
import Root from './components/Root'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About name={'wallie'}/>}/>
        <Route path='more' element={<More/>} loader={dataLoader}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
