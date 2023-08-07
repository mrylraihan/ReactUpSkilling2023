import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
function TestForAlan() {
  const [isTrue, setIsTrue] = useState(false)
  const nav = useNavigate()
  const goBack = () =>{
   setIsTrue(!isTrue)
  }
  console.log(isTrue)
  if(isTrue){
    nav('/')
    // redirect('/') wont work
  }

  return (
    <div className='app'>
      <h1>TestForAlan</h1>
      <button onClick={goBack}>go back</button>
    </div>
  )
}

export default TestForAlan