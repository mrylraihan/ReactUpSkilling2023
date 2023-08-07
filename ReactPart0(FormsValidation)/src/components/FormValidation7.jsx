import React, { useState } from 'react'

function FormValidation7() {
    const [inputName, setInputName] = useState('')
    const [inputTouched, setInputTouched] = useState(false)
    const [isNameValid, setIsNameValid] = useState(false)
    const [error, setError] = useState('')

    const inputNameHandler = e =>{
        setInputName(e.target.value)
       setError('')
       
    }
    const inputNameOnBlurHandler = () =>{
        setInputTouched(true)
        if(inputName.trim() === ''){
            setIsNameValid(false)
            setError('hey theres nothing here!')
        }else{
            setIsNameValid(true)
            setError('')
        }
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        setInputTouched(true)
        if(inputName.trim()!== ''){
            setInputName('')
            setInputTouched(false)
            setIsNameValid(false)
            return
        }
    }

    console.log(inputName, ' name input')
    console.log(isNameValid , ' is name valid')
    console.log(inputTouched , ' isTouched')
  return (
    <div>
          <h1>FormValidation7</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
            <label>Name :
                      <input type="text" value={inputName} onChange={inputNameHandler} onBlur={inputNameOnBlurHandler}/>
            </label>
            <button type='submit' disabled={!isNameValid || error ? true:false}>submit</button>
            </div>
          </form>
          {error && <p>{error}</p>}
    </div>
  )
}

export default FormValidation7