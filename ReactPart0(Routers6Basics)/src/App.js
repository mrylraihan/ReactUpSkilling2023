
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import More from './components/Pages/More';
import About from './components/Pages/About';
import Teaching from './components/Pages/Teaching';
import Plans from './components/Pages/Plans';
import Details from './components/Pages/Details';
function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='more' element={<More/>}>
        <Route path='teaching' element={<Teaching/>}/>
        <Route path='plan' element={<Plans/>}>
            {/* <Route path=':id' element={<Details />} /> */}
        </Route>
      </Route>
      <Route path=':id' element={<Details />} />
      <Route path='about' element={<About/>}/>
     </Routes>
    </div>
  );
}

export default App;
