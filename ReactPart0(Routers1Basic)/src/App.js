import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';
import About from './components/About';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/ShowAll'} element={<ShowAll/>}/>
      <Route path={'/ShowAll/:id'} element={<ShowOne/>}/>
      <Route path={'/About'} element={<About/>}/>
    </Routes>
    </Router>
  );
}

export default App;
