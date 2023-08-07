import React, { useState } from 'react';

import './App.css';


function App() {
  const [obj, setObj] = useState({
    name:'',
    nameList:[]
  })
  const nameOnChangeHandler = e =>{
    setObj(prev=>{
      return {...prev, name:e.target.value}
    })
  }
  const submitHandler = ()=>{
    setObj(prev=>{
      return {...prev, nameList:[...prev.nameList, prev.name], name:''}
    })
  }
  console.log(obj)
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
      <div>
        <label>Add to the array
          <input type="text" value={obj.name} onChange={nameOnChangeHandler}/>
        </label>
      </div>
      <button onClick={submitHandler}>add to list</button>
    </div>
    
    </>
  );
}

export default App;
