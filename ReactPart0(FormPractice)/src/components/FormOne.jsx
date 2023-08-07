import React from 'react'
import { useState } from 'react'

function FormOne() {
    const [inputValue, setInputValue] = useState('')

    const onInputHandler = e => setInputValue(e.target.value)
    const clearInput = () => setInputValue('')
    console.log(inputValue, 'from FormOne')
  return (
    <div className='app'>
          <h1>FormOne with out 2 way binding</h1>
          <h3>{inputValue}</h3>
          <div>
            <label>Test:
                  <input type="text" onChange={onInputHandler}/>
            </label>
              <button onClick={clearInput}>submit</button>
          </div>
    </div>
  )
}

export default FormOne