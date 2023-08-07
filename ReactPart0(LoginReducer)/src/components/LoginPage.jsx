import React, { useState } from 'react'

function LoginPage({state, dispatch}) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const getUserName = e =>{
        setUserName(e.target.value)
        dispatch({type:'error', error:''})
    }
    const getPassWord = e =>{
        setPassWord(e.target.value)
        dispatch({ type: 'error', error: '' })
    }
    const submitHandler = e =>{
        e.preventDefault()
        dispatch({type:'user',user:{userName, passWord}})
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
        {state.error && <h4>{state.error}</h4>}
    </div>
  )
}

export default LoginPage