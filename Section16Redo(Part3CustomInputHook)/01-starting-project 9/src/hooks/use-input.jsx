import React, { useState } from 'react'

function useInput(validateValue) {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = e => {
        setEnteredValue(e.target.value)
        // setEnteredNameTouched(false)if you don't want it showing the error before getting of the input field
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    }
    const reset = ()=>{
        setEnteredValue('')
        setIsTouched(false)
    }
  return {value:enteredValue,isValid: valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset}
}

export default useInput