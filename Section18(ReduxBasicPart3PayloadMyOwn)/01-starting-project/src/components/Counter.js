import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  const [num, setNum] = useState('')
  
  const inputOnchangeHandler = (e) => setNum(e.target.value);
  
  const addCounterHandler = () => {
    dispatch({ type: 'increment', num: +num })
    setNum('')
  }
  const minusCounterHandler = () => {
    dispatch({ type: 'decrement', num: +num })
    setNum('')
  }
  console.log(count)
  console.log(num)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count.counter}</div>
      <div>
        <label>Enter Number :
          <input type="number" value={num} onChange={inputOnchangeHandler} />
        </label>
      </div>
      <button onClick={addCounterHandler}>add</button>
      <button onClick={minusCounterHandler}>minus</button>
    </main>
  );
};

export default Counter;
