import React, { useState } from 'react'

function FormValidation() {
  const [inputValue, setInputValue] = useState('')
  const [inputBlur, setInputBlur] = useState(false)

  const isValid = inputValue.trim() !== ''
  const isNotValid  = !isValid && inputBlur
  
  // if multiple inputs fields we can consolidate to one 
  let formIsValid = false
  if (isValid){
    formIsValid = true
  }
  
  const inputValueHandler = (e) =>{
    setInputValue(e.target.value)
    setInputBlur(false)
  } 
  const inputBlurHandler = ()=>{
    setInputBlur(true)
  }

  const submitHandler = e =>{
    e.preventDefault()
    console.log('submitHandler :', inputValue)
    setInputValue('')
    setInputBlur(false)
  } 
  return (
    <div className='app'>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Please Enter Name :
            <input type="text" value={inputValue} onChange={inputValueHandler} onBlur={inputBlurHandler} />
          </label>
          <button type='submit' disabled={formIsValid?false:true}>Submit</button>
        </div>
        {isNotValid && <p>try again name must not be empty!</p>}
      </form>
    </div>
  )
}

export default FormValidation