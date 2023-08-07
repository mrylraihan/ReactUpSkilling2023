import { useRef } from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch, useStore} from 'react-redux'
const Counter = () => {
  const numRef = useRef()
  const store = useStore()//testing
  console.log(store.getState())//testing just a sna shot of the state
  const counter = useSelector(state=>state.count)
  const toggle = useSelector(state=>state.toggle)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {dispatch({type:"toggle"})};
  const addCounterHandler = () => {dispatch({type:"increment"})};
  const minusCounterHandler = () => dispatch({type:"decrement"});
  const increaseHandler = () => {
    const num  = +numRef.current.value  
    dispatch({type:"increase", amount:num});
    numRef.current.value = ''
  }
  console.log(counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <label><h3> Amount :</h3>
          <input type="text" ref={numRef}/>
        </label>
      </div>
      {/* <div className={classes.value}>-- {store.getState().count} --</div> doesnt show most up to date state */}
      {toggle && <div className={classes.value}>-- {counter} --</div>}
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
