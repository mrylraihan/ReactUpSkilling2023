import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Test() {
    const count = useSelector(state=>state.count)
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(count)
    console.log(state)

    const addOne = ()=>{
        dispatch({ type: 'incre' })
    }
    const minusOne = ()=>{
        dispatch({ type: 'decre' })
    }
    const reset = ()=>{
        dispatch({type:'reset'})
    }

  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={addOne}>Add</button>
              <button onClick={minusOne}>Minus</button>
            <button onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Test