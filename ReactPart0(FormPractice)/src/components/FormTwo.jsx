import React from 'react'
import { useState } from 'react'

// function FormTwo({inputValue, setInputValue}) {
function FormTwo() {
    const [inputValue, setInputValue] = useState('')

    const onInputHandler = e => setInputValue(e.target.value)
    const clearInput = () => setInputValue('')
  console.log(inputValue, 'from FormTwo')
  return (
    <div className='app'>
          <h1>FormTwo with 2 way binding</h1>
          <h3>{inputValue}</h3>
          <div>
            <label>Test:
          <input type="text" value={inputValue} onChange={onInputHandler}/>
            </label>
              <button onClick={clearInput}>submit</button>
          </div>
    </div>
  )
}

export default FormTwo