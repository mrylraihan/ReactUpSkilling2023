import React, { useState } from 'react'

function LoginPage(props) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const getUserName = e =>{
        setUserName(e.target.value)
        props.setError('')
    }
    const getPassWord = e =>{
        setPassWord(e.target.value)
        props.setError('')
    }
    const submitHandler = e =>{
        e.preventDefault()
        props.setUser({userName, passWord})
        setUserName('')
        setPassWord('')
    }
  return (
    <div>
        <h3>Login Page</h3>
        <form onSubmit={submitHandler}>
            <div>
                <label>userName:
                    <input type="text" value={userName} onChange={getUserName}/>
                </label>
            </div>
            <div>
                <label>passWord:
                    <input type="text" value={passWord} onChange={getPassWord}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {props.error && <h4>{props.error}</h4>}
    </div>
  )
}

export default LoginPage