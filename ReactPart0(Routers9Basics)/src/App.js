
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import More from './components/pages/More';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/more' element={<More/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
