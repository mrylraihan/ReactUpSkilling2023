
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
const [data, setData] = useState({
  list:Dummy_Data,
  removedList:[]
})
console.log(data)
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
      <DataDisplay  list={data.list} setData={setData}/>
      <RemovedData list={data.list} setData={setData} removedList={data.removedList}/>
    </>
  );
}

export default App;
