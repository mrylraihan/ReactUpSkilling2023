import React, { useState } from 'react'

function useInput(fn) {
    const [inputValue, setInputValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValid = fn(inputValue)
    const isNotValid = !isValid && isTouched

// this is only needed if we have multiple inputs plus this would be outside the custom hook 
    // let formIsValid = false
    // if (isValid) {
    //     formIsValid = true
    // }


    const inputOnChangeHandler = e => {
        setInputValue(e.target.value)
        setIsTouched(false)
    }
    const onBlurHandler = e => {
        setIsTouched(true)
    }

    const resetState = ()=>{
        setInputValue('')
        setIsTouched(false)
    }
    return [inputValue, isTouched, isNotValid, isValid, inputOnChangeHandler, onBlurHandler, resetState]
}

export default useInput