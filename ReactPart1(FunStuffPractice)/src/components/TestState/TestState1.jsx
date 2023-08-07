import React, { useState } from 'react'

function TestState1() {
    const [inputV, setInputV] = useState('')
    const [submitValue, setSubmitted] = useState('')

    const onChangeHandler = e =>{
        setInputV(e.target.value)
    }
    const submitHandler = () =>{
        setSubmitted(inputV)
        setInputV('')
    }
  return (
    <div className='app'>
          <h1>TestState1</h1>
          <h3>Submitted Value: {submitValue}</h3>
          <h3>state value: {inputV}</h3>
          <div>
            <label>
                  <input type="text" value={inputV} onChange={onChangeHandler}/>
            </label>
            <button onClick={submitHandler}>submit</button>
              <button onClick={setSubmitted.bind(this,'')}>reset</button>
          </div>
    </div>
  )
}

export default TestState1