import React, { useRef, useState } from 'react'

function add() {
    const [user, setUser] = useState('')
    const usernameRef = useRef()
    const passwordRef = useRef()
    
    const submitDataHandler = e =>{
        e.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        // console.log({username, password})
        fetch('../api/user/add', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username:username, password:password })
        })
        .then(res=>res.json())
        .then(result=>{
            setUser(result)
            console.log(result)
            usernameRef.current.value = ''
            passwordRef.current.value = ''
        })
        .catch(console.error)
    } 
  return (
    <>
    <div className='app'>
          <form onSubmit={submitDataHandler}>
            <div>
                <label>UserName:
                <input type="text" ref={usernameRef}/>
                </label>
            </div>
            <div>
                <label>Password:
                <input type="text" ref={passwordRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
    {user.username && <div className='app'>
        <p>{user.username}</p>
        <p>{user.password}</p>
        </div>}
    </>
  )
}

export default add