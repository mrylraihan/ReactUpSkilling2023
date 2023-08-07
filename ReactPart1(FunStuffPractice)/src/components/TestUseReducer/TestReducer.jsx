import React, { useReducer } from 'react'
const initial = 0
const reducer = (state, action)=>{
    if(action === 'add'){
       return  state+=1
    } else if (action === 'minus'){
        return state -= 1
    }else{
        return initial
    }
}
function TestReducer() {
    const [count ,dispatch ]= useReducer(reducer, initial)
  return (
    <div className='app'>
          <h1>TestReducer</h1>
          <h2>{count}</h2>
          <button onClick={dispatch.bind(this,'add')}>add</button>
          <button onClick={dispatch.bind(this, 'minus')}>minus</button>
          <button onClick={dispatch.bind(this, 'reset')}>reset</button>
    </div>
  )
}

export default TestReducer