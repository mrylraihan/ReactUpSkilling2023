import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  
  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };
  const addCounterHandler = () => {
    dispatch({type:"add"})
  };
  const minusCounterHandler = () => {
    dispatch({type:"minus"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { state.toggle && <div className={classes.value}>-- {state.count} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={addCounterHandler}>Add</button>
      <button onClick={minusCounterHandler}>Minus</button>
    </main>
  );
};

export default Counter;
