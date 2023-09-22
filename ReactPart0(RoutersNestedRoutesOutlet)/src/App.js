import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Test1 from './components/Test1';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Page1 from './components/Nested/Page1';
import Page2 from './components/Nested/Page2';

function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test1' element={<Test1/>}/>
        <Route path='/test2' element={<Test2/>}/>
        <Route path='/test3' element={<Test3/>}/>
        <Route path='/test4' element={<Test4/>}>
          <Route path='page1' element={<Page1></Page1>}/>
          <Route path='page2' element={<Page2></Page2>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
