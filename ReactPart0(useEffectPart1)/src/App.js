import React, { useEffect, useState } from 'react';

import './App.css';


function App() {
  const [toggle, setToggle] = useState(false)

  const istrue = toggle == true

  console.log(istrue)
  
  useEffect(()=>{
    console.log('use Effect working')
  },[istrue])


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={setToggle.bind(this, !toggle)}>toggle</button>
      
    </div>
  );
}

export default App;
