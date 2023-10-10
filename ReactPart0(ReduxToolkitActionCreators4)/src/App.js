
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getData, deleteData } from './store';
function App() {
  const data = useSelector(state=>state.dataSlice)
  const dispatch = useDispatch()
  console.log(data)
  
  useEffect(()=>{
    dispatch(getData())
  },[])

  let content = data.map(ele => <li key={ele.id}><div><p>{ele.title}</p><button onClick={() => {
    dispatch(deleteData(ele.id))
  }}>delete Blog</button></div></li>)

  return (
    <div className="app">
      <h1>Hello</h1>
      <ul>
        {content}
      </ul>
    </div>
  );
}

export default App;
