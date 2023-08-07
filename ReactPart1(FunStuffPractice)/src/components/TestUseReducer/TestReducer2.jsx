import React, { useReducer } from 'react'
import { useState } from 'react'
const initial = {count:0, quote:''}
const reducer = (state, action)=>{
    if(action.type === 'add'){
       return  {...state, count : state.count+=1}
    } else if (action.type === 'minus'){
      return { ...state, count: state.count -= 1 }
    } else if (action.type === 'quote'){
      return { ...state, quote: action.quote }
        // return state.quote = getQuote()
    }else{
        return initial
    }
}
const getQuote = ()=>{
  let quote = ''
  fetch('https://api.kanye.rest/')
  .then(res=>res.json())
  .then(result=>{
    quote = result.quote
  })
  .catch(console.error)
  return quote
}
function TestReducer2() {
  const [state ,dispatch ]= useReducer(reducer, initial)
  // const [quote, setQuote] = useState('')

  const getFetch = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(result=>result.quote)
    .then(quote => dispatch({ type: 'quote', quote:quote }))
    .catch(console.error)
  }
  

  console.log(state)
  
  return (
    <div className='app'>
          <h1>TestReducer2</h1>
          <h2>{state.count}</h2>
          <h3>{state.quote}</h3>
          <button onClick={dispatch.bind(this,{type:'add'})}>add</button>
          <button onClick={dispatch.bind(this,{type: 'minus'})}>minus</button>
          <button onClick={dispatch.bind(this, {type:'reset'})}>reset</button>
      <button onClick={getFetch}>Change Quote</button>
    </div>
  )
}

export default TestReducer2