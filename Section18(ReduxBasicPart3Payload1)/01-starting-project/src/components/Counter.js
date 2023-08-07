import {useSelector, useDispatch, useStore} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
const count = useSelector(state=>state)
const dispatch = useDispatch()
console.log(count)
// const store = useStore()
// console.log(store.getState(), 'useStore')
// console.log(store, 'useStore')

  const toggleCounterHandler = () => {};
  const addCounterHandler = () => dispatch({type:'increment'})
  const incrementBy5 = () => dispatch({type:'increase', amount:5})
  const minusCounterHandler = () => dispatch({ type: 'decrement' })
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count.counter}</div>
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
