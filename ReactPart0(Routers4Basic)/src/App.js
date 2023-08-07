import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/nav/Navbar';
import Hobbies from './components/pages/Hobbies';
import Education from './components/pages/Education';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
         <Route path='hobbies' element={<Hobbies />} />
          <Route path='education' element={<Education />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
