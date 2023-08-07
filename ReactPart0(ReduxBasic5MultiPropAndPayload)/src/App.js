
import { useSelector } from 'react-redux';
import './App.css';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';
import ThirdComp from './components/ThirdComp';

function App() {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <>
    <div className="app">
      <FirstComp/>
    </div>
    <div className='app'>
      <SecondComp/>
    </div>
    <div className='app'>
      <ThirdComp/>
    </div>
    </>
  );
}

export default App;
