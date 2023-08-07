import React from 'react'
import { useState } from 'react'

function Login({ setUser }) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')

    const userNameHandler = e => setUserName(e.target.value)
    const passWordHandler = e => setPassword(e.target.value)

    const submitHandler = e =>{
        e.preventDefault()
        setUser({ userName, passWord })
        setUserName('')
        setPassword('')
    }

  return (
    <div>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label>UserName:
                    <input type="text" value={userName} onChange={userNameHandler}/>
                </label>
            </div>
            <div>
                <label>Password:
                    <input type="text" value={passWord} onChange={passWordHandler}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default Login