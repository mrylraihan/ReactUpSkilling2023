import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const state = useSelector(state=>state)
   const dispatch = useDispatch()

   const addFn = ()=>dispatch({type:'add'})
   const minusFn =()=> dispatch({type:'minus'})
   const toggleFn =()=> dispatch({type:'toggle'})
   console.log(state)
  return (
    <div>
          <h2>Counter</h2>
          <div>
            {state.toggle && <h2>{state.count}</h2>}
            <button onClick={addFn}>Add</button>
            <button onClick={minusFn}>Minus</button>
            <button onClick={toggleFn}>Toggle</button>
          </div>
    </div>
  )
}

export default Counter