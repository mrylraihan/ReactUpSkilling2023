import React, { useState } from 'react'

function FormValidation6() {
    const [inputName, setInputName] = useState('')
    const [inputTouched, setInputTouched] = useState(false)
    const [isNameValid, setIsNameValid] = useState(false)
    const [error, setError] = useState('')

    const inputNameHandler = e =>{
        setInputName(e.target.value)
        // by adding this check on the onChnage means it will check on every key press so even when you in the input field it will be checking for validation
        if (e.target.value.trim() === '') {
            setIsNameValid(false)
            setError('hey theres nothing here!')
        } else {
            setIsNameValid(true)
            setError('')
        }
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
          <h1>FormValidation6</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
            <label>Name :
                      <input type="text" value={inputName} onChange={inputNameHandler} onBlur={inputNameOnBlurHandler}/>
            </label>
            <button type='submit' disabled={error || !isNameValid ?true:false}>submit</button>
            </div>
          </form>
          {error && <p>{error}</p>}
    </div>
  )
}

export default FormValidation6