import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Nav from './components/navbar/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import More from './components/pages/More';

function App() {
  return (

    <Router>
      <Nav/>
      <Routes>
        {/* Navigate will allows you to forward to a specific route when this path is set */}
        <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='more' element={<More/>}/>
      </Routes>

    </Router>

    //     <Router>
    //   <Nav/>
    //   <Routes>
    //     {/* Navigate will allows you to forward to a specific route when this path is set */}
    //     <Route path='/'/>
    //     <Route index element={<Test/>}/>
    //     <Route path='home2' element={<Navigate to='/home' replace={true} />}/>
    //     <Route path='about' element={<About/>}/>
    //     <Route path='more' element={<More/>}/>
    //   </Routes>

    // </Router>
  );
}

export default App;
