import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Test from './components/pages/Test';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/about' element={<About/>}/>
      <Route path='/home/test' element={<Test/>}/>
    </Routes>
    </Router>
  );
}

export default App;
