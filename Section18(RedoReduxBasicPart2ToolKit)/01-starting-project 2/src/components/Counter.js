import { useRef } from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/index';
const Counter = () => {
  const numRef = useRef()
  // const state = useSelector(state => state.countSlice)
  const state = useSelector(state => state)
  const counter = useSelector(state => state.count)
  const toggle = useSelector(state=>state.toggle)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => { dispatch(counterActions.toggleCounter())};
  const addCounterHandler = () => {dispatch(counterActions.increment())};
  const minusCounterHandler = () => dispatch(counterActions.decrement());
  const increaseHandler = () => {
    const num  = +numRef.current.value  
    dispatch(counterActions.increase(num));// {type: Some_Unique_identifier, payload:num}
    numRef.current.value = ''
  }
  console.log(state)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <label><h3> Amount : {counter}</h3>
          <input type="text" ref={numRef}/>
        </label>
      </div>
      {/* <div className={classes.value}>-- {store.getState().count} --</div> doesnt show most up to date state */}
      { toggle && <div className={classes.value}>-- {counter} --</div>}
     <div>
      <button onClick={addCounterHandler}>+</button>
      <button onClick={increaseHandler}>+ by 5</button>
      <button onClick={minusCounterHandler}>-</button>
     </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
