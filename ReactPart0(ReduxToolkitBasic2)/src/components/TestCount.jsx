import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countActions } from '../store/counterSlice'
function TestCount() {
    const count = useSelector(state=>state.counter.count)
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(count)
    console.log(state)

    const addOne = ()=>{
        dispatch(countActions.addOne())
    }
    const minusOne = ()=>{
        dispatch(countActions.minusOne())
    }
    const resetOne = ()=>{
        dispatch(countActions.reset())
    }

  return (
    <div>
          <h3>TestCount</h3>
          <div>
          {count&&<h3>{count}</h3>}
          </div>
          <button onClick={addOne}>add</button>
          <button onClick={minusOne}>minus</button>
          <button onClick={resetOne}>reset</button>
    </div>
  )
}

export default TestCount