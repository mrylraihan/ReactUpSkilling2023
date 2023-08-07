import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import All from './components/All';
import About from './components/About';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='people'>
      <Route index element={<All />}/>
      {/* <Route path=':id' element={<People />} loader={onePersonLoader} /> */}
    </Route>
    <Route path='about'>
      <Route index element={<About />} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
