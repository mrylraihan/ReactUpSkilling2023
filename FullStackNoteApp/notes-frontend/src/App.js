import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Create from './components/pages/Create';
import Home from './components/pages/Home';
import ShowAll from './components/pages/ShowAll';
import ShowSingle from './components/pages/ShowSingle';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About />}/>
          <Route path={'/create'} element={<Create />}/>
          <Route path={'/showall'} element={<ShowAll />}/>
          <Route path={'/showall/:id'} element={<ShowSingle />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
