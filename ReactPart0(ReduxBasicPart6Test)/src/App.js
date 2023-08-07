
import './App.css';
import GetData from './components/GetData';
import RenderData from './components/RenderData';

function App() {
  return (
    <>
    <div className="app">
      <GetData/>
    </div>
    <div className="app">
      <RenderData/>
    </div>
    </>
  );
}

export default App;
