
import './App.css';
import TestCompFetchState from './components/TestCompFetchState';
import TestCompReduxFetch from './components/TestCompReduxFetch';
import TestCompStateAndRef from './components/TestCompStateAndRef';

function App() {
  return (
    <>
      <div className="app">
        <TestCompStateAndRef />
      </div>
      <div className='app'>
        <TestCompFetchState />
      </div>
      <div className='app'>
        <TestCompReduxFetch />
      </div>
    </>
  );
}

export default App;
