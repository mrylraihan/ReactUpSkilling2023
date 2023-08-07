
import { useState } from 'react';
import './App.css';
import Level1 from './components/Level1';

function App() {
  const [isOn, setIsOn] = useState(false)
  return (
    <div className="app">
      <p>{""+isOn}</p>
      <p>{isOn.toString()}</p>
      <Level1 isOn={isOn} setIsOn={setIsOn}/>
    </div>
  );
}

export default App;
