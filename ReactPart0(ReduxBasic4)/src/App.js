import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const {toggle, count} = useSelector(state=>state)
  const dispatch = useDispatch()
  console.log(toggle)
  console.log(count)
  return (
    <div className="App">
     
    {toggle && <div>
      <h1>Count: {count}</h1>
        <button onClick={()=>dispatch({type:"plus"})}>+</button>
        <button onClick={()=>dispatch({ type: "minus" })}>-</button>
    </div>}
      <button onClick={()=>dispatch({ type: "toggle" })}>Toggle</button>
    </div>
  );
}

export default App;
