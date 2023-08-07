import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
function App() {
  return (
   <Router>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
