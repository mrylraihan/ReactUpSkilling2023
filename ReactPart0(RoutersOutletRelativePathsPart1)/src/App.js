import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './nav/Navbar';
import Home from './components/Home';
import About from './components/About';
import Test from './components/Test';
import People from './components/People';
import Root from './components/Root';
import Person from './components/Person';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='test' element={<Test/>}/>
      <Route path='people' element={<People/>}>
      {/* <Route path=':idx' element={<Person/>}/> */}
      </Route>
      <Route path='people/:idx' element={<Person/>}/>

    </Route>
  </Routes>
  </>
  );
}

export default App;
