import {useEffect, useState} from 'react'
import './App.css';
import useTimer from './hooks/use-timer';

function App() {
  const [counter, turnTimerOn] = useTimer()
  const [counter2, turnTimerOn2] = useTimer(10)
  return (
    <div className="app">
      <h1>Hello</h1>
      <p>showing that whenever you use a custom hook it creates a seperate instance of that hook!</p>
      <p><b>First Instance: </b>{counter}</p>
      <button onClick={turnTimerOn}>turn on timer 1</button>
      <p><b>Second Instance: </b>{counter2}</p>
      <button onClick={turnTimerOn2}>turn on timer 2</button>
    </div>
  );
}

export default App;
