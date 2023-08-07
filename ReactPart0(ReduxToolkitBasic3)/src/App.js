
import { useSelector } from 'react-redux';
import './App.css';
import TestToggle from './components/TestToggle';

function App() {
  const toggle = useSelector(state => state.toggleState.toggle)
  return (
    <div className={toggle ? "app" :"app darkMode"}>
      <TestToggle/>
    </div>
  );
}

export default App;
