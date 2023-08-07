import React, { useState } from 'react'
import useInput from '../hooks/use-input'

function FormValidCustomHook() {
    const [inputValue, isTouched, isNotValid, isValid, inputOnChangeHandler, onBlurHandler, resetState] = useInput(v=>v.trim()!=='')
 
    const onSubmitHandler = e =>{
        e.preventDefault()
        resetState()
    }
  return (
    <div className='app'>
        <p>isTouched : {isTouched.toString()}</p>
          <p>Input Value: {inputValue}</p>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name :
                      <input type="text" value={inputValue} onChange={inputOnChangeHandler} onBlur={onBlurHandler}/>
                </label>
                  <button disabled={isValid ?false:true}>submit</button>
            </div>
              {isNotValid && <p>You didnt write anything!</p>}
        </form>
    </div>
  )
}

export default FormValidCustomHook