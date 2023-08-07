import React, { useState } from 'react'

function FormValidation3() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [userNameIsTouched, setUserNameIsTouched] = useState(false)
    const [emailIsTouched, setEmailIsTouched] = useState(false)
    const [errorEm, setErrorEm] = useState('')
    const [errorUs, setErrorUs] = useState('')

    const emailIsValid = email.includes('@') && emailIsTouched;
    const userNameIsValid = username.trim() !== '' && userNameIsTouched;
    const isVald = emailIsValid && userNameIsValid
    
    const onBlurEmail = e =>{
        setEmailIsTouched(true)
        if(!e.target.value.includes('@'))setErrorEm('email needs a @')
    }
    const onBlurUserName = e =>{
        setUserNameIsTouched(true)
        if(!e.target.value.trim())setErrorUs('UserName must not be empty')
    }

    const getUserName = e =>{
        setUsername(e.target.value)
        setErrorUs('')
    }
    const getEmail = e =>{
        setEmail(e.target.value)
        setErrorEm('')
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
        setEmail('')
        setUsername('')
        setUserNameIsTouched(false)
        setEmailIsTouched(false)
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>UserName :
                    <input type="text" value={username} onChange={getUserName} onBlur={onBlurUserName}/>
                </label>
                {errorUs && <p>{errorUs}</p>}
            </div>
            <div>
                <label>Email :
                    <input type="text" value={email} onChange={getEmail} onBlur={onBlurEmail}/>
                </label>
                {errorEm && <p>{errorEm}</p>}
            </div>
            <button type='submit' disabled={!isVald}>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation3