import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import { useEffect } from 'react';
import { getDataAction, deleteDataAction } from './store/index';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state)
  console.log(data)

  useEffect(()=>{
    dispatch(getDataAction())
  },[])

  const deletePost = post =>{
    dispatch(deleteDataAction(post))
  }

  let content = data.data.map(ele=><li key={ele.title} onClick={deletePost.bind(this, ele)}>{ele.title}</li>)

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
