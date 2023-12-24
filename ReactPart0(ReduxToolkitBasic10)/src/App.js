
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { dataActions } from './store';
import { getTestData } from './store/actiontest';
function App() {
  const {dataSlice, testSlice} = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetchData()
    dispatch(getTestData())
  },[])
  
  const fetchData = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await res.json()
    console.log("from App.js: ",result);
    dispatch(dataActions.getData({data:result}))
  }

  console.log("Redux state",dataSlice)
  console.log("Redux state test ActionCreator",testSlice)
  return (
    <div className="app">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
