
import { useSelector } from 'react-redux';
import './App.css';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';

function App() {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <>
    <div className="app">
      <FirstComp/>
    </div>
    <div className="app">
      <SecondComp/>
    </div>
    </>
  );
}

export default App;
