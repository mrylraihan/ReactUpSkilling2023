import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';
const Counter = () => {
  const state = useSelector(state => state)
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.counter.toggle)
  const dispatch = useDispatch()
  console.log(state)
  console.log(counter)
  console.log(toggle)


  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());
  const addCounterHandler = () => dispatch(counterActions.increment())
  const minusCounterHandler = () => dispatch(counterActions.decrement())
  const incrementBy5 = () => dispatch(counterActions.increase(+5))
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={addCounterHandler}>Increment</button>
        <button onClick={incrementBy5}>Increment by 5</button>
        <button onClick={minusCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
