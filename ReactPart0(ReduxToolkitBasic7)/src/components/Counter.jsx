import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store'
function Counter() {
    const counter = useSelector(state=>state.counterSlice.counter)
    const dispatch = useDispatch()
    const numRef = useRef()
    console.log(counter)

    const addInputValue = e =>{
        const num = +numRef.current.value;
      dispatch(counterActions.increase(num))
        numRef.current.value = ""
    }
  return (
    <div className='app'>
        <h1>counter: {counter}</h1>
        <div>
        <button onClick={dispatch.bind(this, counterActions.add())}>add 1</button>
        <button onClick={dispatch.bind(this, counterActions.minus())}>minus 1</button>
        </div>
        <div>
            <label>Add your number!:
                <input type="number" ref={numRef}/>
            </label>
              <button onClick={addInputValue}>submit</button>
        </div>
    </div>
  )
}

export default Counter