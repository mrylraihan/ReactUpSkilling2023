
import { useEffect, useState } from 'react';
import './App.css';
import AllPost from './components/AllPost';
import PostAxios from './components/PostAxios';
import PostFetch from './components/PostFetch';

function App() {
  const [blogList, setList] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setList)
    .catch(console.error)
  },[])
  return (
    <>
    <div className="app">
      <h1>Hello</h1>
    </div>
      <PostAxios setList={setList} />
      <PostFetch setList={setList} />
      <AllPost blogList={blogList}/>
    </>
  );
}

export default App;
