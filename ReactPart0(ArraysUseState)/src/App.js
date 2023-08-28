
import { useState } from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';
import RemovedData from './components/RemovedData';


const Dummy_Data = [
  {name:"Wallie", id:0},
  {name:"Heshow", id:1},
  {name:"Meshia", id:2}
]
function App() {
  const [data, setData] = useState(Dummy_Data)
  const [emptyData, setEmptyData] = useState([])
  console.log("real data", data)
  console.log("removed data", emptyData)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
      <DataDisplay data={data} setData={setData} setEmptyData={setEmptyData} emptyData={emptyData} />
      <RemovedData data={data} setData={setData} setEmptyData={setEmptyData} emptyData={emptyData} />
    </>
  );
}

export default App;
