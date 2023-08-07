
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Name from './components/Name';
import { toggleActions } from './store/index';

function App() {
  const toggle = useSelector(state=>state.toggleSlice.toggle)
  const dispatch = useDispatch()
  const toggleHandler = () => dispatch(toggleActions.toggleHandler())
  console.log(toggle)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
        <button onClick={toggleHandler}>Toggle</button>
    </div>
    {toggle && <Name/>}
    </>
  );
}

export default App;
