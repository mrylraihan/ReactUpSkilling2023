
import './App.css';
import GetName from './components/GetName';
import GetNameReducer from './components/GetNameReducer';

function App() {
  return (
   <>
      <div className="app">
        <GetName />
      </div>
      <div className="app">
        <GetNameReducer />
      </div>
   </>
  );
}

export default App;
