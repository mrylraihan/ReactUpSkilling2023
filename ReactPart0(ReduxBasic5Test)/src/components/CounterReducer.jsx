import React, { useReducer } from 'react'

const initial = {counter : 0}
const countReducer = (state , action)=>{
    if(action.type == 'add'){
        return {...state, counter:state.counter +1}
    } else if (action.type == 'minus') {
        return { ...state, counter: state.counter - 1 }
    }else{
        return state
    }
}
function CounterReducer() {
    const [state, dispatch] = useReducer(countReducer, initial)

    const addFn = () => dispatch({ type: 'add' })
    const minusFn = () => dispatch({ type: 'minus' })
    console.log(state, 'reducer')
  return (
    <div>
          <h1>CounterReducer</h1>
          <div>
              {<h2>{state.counter}</h2>}
              <button onClick={addFn}>Add</button>
              <button onClick={minusFn}>Minus</button>
          </div>
    </div>
  )
}

export default CounterReducer