
import { useSelector } from 'react-redux';
import './App.css';
import Name from './components/Name';
import Data from './components/Data';

function App() {
  const state = useSelector(state=>state)
  console.log(state)
  
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
    <Name/>
    <Data/>
    </>
  );
}

export default App;
