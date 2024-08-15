import './App.css';
import Test from './components/Test';
import TestContextProvider from './store/test-context';

function App() {
  return (
    <TestContextProvider>
    <div className="app">
      <h1>Hello</h1>
    </div>
    <Test/>
    </TestContextProvider>
  );
}

export default App;
