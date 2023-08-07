import React, { useEffect, useState } from 'react'

function FormValidation5() {
    const [inputName, setInputName] = useState('')
    const [inputTouched, setInputTouched] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        if(inputTouched && inputName.trim() === ''){
            setError('Nothing was Submitted, Try again')
            console.log('error')
        }
    })
    console.log('isTouched: ', inputTouched)
    const getName = e =>{
        setInputName(e.target.value)
        setError('')
        setInputTouched(false)
    }
    const onBlurName = e =>{
        setInputTouched(true)
    }

    console.log("inputName: ", inputName)

    const onSubmitHandler = e =>{
        e.preventDefault()
        setInputTouched(true)
        if(setInputName){
            setInputTouched(false)
        }
        setInputName('')
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name :
                    <input type="text" value={inputName} onChange={getName} onBlur={onBlurName}/>
                </label>
                <button disabled={inputName.trim()==''?true:false}>Sign-In</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default FormValidation5