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
  const minusCounterHandler = () => dispatch({ type: 'decrement' })
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count.counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={addCounterHandler}>add</button>
      <button onClick={minusCounterHandler}>minus</button>
    </main>
  );
};

export default Counter;
