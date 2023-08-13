
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import { toggleActions } from './store';
function App() {
  const reduxState = useSelector(state=>state)
  const toggle = useSelector(state=>state.toggleSlice.toggle)
  const dispatch = useDispatch()
  console.log(reduxState)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
        <button onClick={dispatch.bind(this, toggleActions.toggleHandler())}>toggle Counter!</button>
    </div>
    {toggle && <Counter/>}
    </>
  );
}

export default App;
