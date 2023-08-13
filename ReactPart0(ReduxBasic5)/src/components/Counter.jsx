import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    const numRef = useRef()
    console.log(counter)

    const addInputValue = e =>{
        const num = +numRef.current.value;
        dispatch({type:"increase",num:num})
        numRef.current.value = ""
    }
  return (
    <div className='app'>
        <h1>counter: {counter}</h1>
        <div>
              <button onClick={dispatch.bind(this, {type:"add"})}>add 1</button>
              <button onClick={dispatch.bind(this, { type: "minus" })}>minus 1</button>
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