import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Hobbies from './components/pages/Hobbies';
import Education from './components/pages/Education';
import All, { loader as allLoader } from './components/pages/All';
import Main from './components/pages/Main';

// loaders only work when we create our routes with a createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Main />}>
    <Route index element={<Home />} />
    <Route path='/all' element={<All />} loader={allLoader} />
    <Route path='/about' element={<About />} />
    <Route path='/hobbies' element={<Hobbies />} />
    <Route path='/education' element={<Education />} />
  </Route>
  ))

function App() {
  return <RouterProvider router={router} />;
  // Loader wont work here
  // return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Main />}>
    //       <Route index element={<Home />} />
    //       <Route path='/all' element={<All />} loader={allLoader} />
    //       <Route path='/about' element={<About />} />
    //       <Route path='/hobbies' element={<Hobbies />} />
    //       <Route path='/education' element={<Education />} />
    //     </Route>
    //   </Routes>
    // </Router>
  // )
}


export default App;
