
import './App.css';
import TestCustomHook from './components/TestCustomHook';
import TestCustomHook2 from './components/TestCustomHook2';
import TestFetchHook from './components/TestFetchHook';

function App() {
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
      <TestCustomHook/>
      <TestCustomHook2/>
      <TestFetchHook/>
    </>
  );
}

export default App;
