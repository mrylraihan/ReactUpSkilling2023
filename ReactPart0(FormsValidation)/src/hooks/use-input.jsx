import React, { useState } from 'react'

function useInput(validateFn) {
    const [enteredValue, setEnteredValue] = useState('')
    const [enteredValueTouched, setEnteredValueTouched] = useState(false)

    const isValid = validateFn(enteredValue)
    const isNotValid = !isValid && enteredValueTouched


 
    const valueInputHandler = e => {
        setEnteredValue(e.target.value)
        setEnteredValueTouched(false)//if you don't want it showing the error before getting of the input field
    }

    const valueInputBlurHandler = (e) => {
        setEnteredValueTouched(true);
    }

    const resetData = ()=>{
        setEnteredValue('')
        setEnteredValueTouched(false)
    }

    return [enteredValue, isValid, isNotValid, valueInputHandler, valueInputBlurHandler, resetData]
}

export default useInput