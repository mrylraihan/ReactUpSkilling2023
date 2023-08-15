
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
function App() {
  return (
    <Router>
    <div className="app">
      <h1>Hello</h1>
      <ul>
          <li> <Link to='/'>home</Link></li>
          <li> <Link to='/home'>home</Link></li>
          <li><Link to='/p1'>p1</Link></li>
          <li><Link to='/p2'>p2</Link></li>
          <li><Link to='/p3'>p3</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/p1' element={<Page1/>}/>
      <Route path='/p2' element={<Page2/>}/>
      <Route path='/p3' element={<Page3/>}/>
        <Route path='/home' element={<Home />}/>
    </Routes>
    </Router>
  );
}

export default App;
