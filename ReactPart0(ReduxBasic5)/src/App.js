
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';

function App() {
  const toggle = useSelector(state=>state.toggle)
  const dispatch = useDispatch()
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
      <button onClick={dispatch.bind(this, {type:"toggle"})}>toggle Counter!</button>
    </div>
    {toggle && <Counter/>}
    </>
  );
}

export default App;
