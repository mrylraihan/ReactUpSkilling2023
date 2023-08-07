import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CounterRedux() {
   const state = useSelector(state=>state)
   const dispatch = useDispatch()

   const addFn = ()=>dispatch({type:'add'})
   const minusFn =()=> dispatch({type:'minus'})
   console.log(state, 'redux')
  return (
    <div>
          <h2>CounterRedux</h2>
          <div>
            {<h2>{state.counter}</h2>}
            <button onClick={addFn}>Add</button>
            <button onClick={minusFn}>Minus</button>
          </div>
    </div>
  )
}

export default CounterRedux