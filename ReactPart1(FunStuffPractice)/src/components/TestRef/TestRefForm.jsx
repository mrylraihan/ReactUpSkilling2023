import React, { useRef } from 'react'
import { useState } from 'react'

function TestRefForm() {
    const [result, setResult] = useState('')
    const inputRef = useRef()

    const submitHandler = () =>{
        setResult(inputRef.current.value)
        inputRef.current.value = ''
    }
  return (
    <div className='app'>
          <h1>TestRefForm</h1>
         {result && <h3>{result}</h3>}
          <div>
            <label>
                input here :
                <input type="text" ref={inputRef} />
            </label>
            <button onClick={submitHandler}>submit</button>
            <button onClick={setResult.bind(this, '')}>clear</button>
          </div>
    </div>
  )
}

export default TestRefForm