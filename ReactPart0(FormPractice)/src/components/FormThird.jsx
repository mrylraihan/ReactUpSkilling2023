import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

// function FormTwo({inputValue, setInputValue}) {
function FormThird() {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()
    setInputValue(inputRef.current.value)
    inputRef.current.value = ''
  }

  console.log(inputValue, 'from FormThird')
  return (
    <div className='app'>
      <h1>FormThird with 2 way binding</h1>
      <h3>{inputValue}</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>Test:
            <input type="text" ref={inputRef} />
          </label>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormThird