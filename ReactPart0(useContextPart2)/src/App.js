import {useEffect, useState} from 'react'
import './App.css';
import TimerContext from './store/timer-context'
import Level1 from './components/Level1';
function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

  useEffect(()=>{
    if(isOn){
      setTimeout(()=>{
        setCount(prev=>prev+1)
      }, 1000)
    }
  })

  return (
    <TimerContext.Provider value={{count, setIsOn}}>
    <div className="app">
      <h1>Hello</h1>
      <Level1/>
    </div>
    </TimerContext.Provider>
  );
}

export default App;
