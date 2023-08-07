import React from 'react'
import { useSelector } from 'react-redux'

function TestReduxComp() {
    const reduxName = useSelector(state=>state)
    console.log(reduxName)
  return (
    <div className='app'>
          <h1>TestReduxComp</h1>
          <h3>{reduxName.name}</h3>
    </div>
  )
}

export default TestReduxComp