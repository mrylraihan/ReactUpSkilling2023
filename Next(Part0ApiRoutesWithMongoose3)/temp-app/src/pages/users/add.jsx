import React, { useRef, useState } from 'react'

function add() {
  const [newUser, setUser] = useState('')
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const onSubmitHandler = e => {
    e.preventDefault()
    const body = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    fetch('../api/users/create', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(result =>{
      userNameRef.current.value = ''
      emailRef.current.value = ''
      passwordRef.current.value = ''
      setUser(result)
      console.log(result)})
    .catch(console.error)

    
  }
  return (
    <>
    <div className='app'>
      <h1>create a user</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label><strong>UserName:</strong>
            <input type="text" ref={userNameRef} />
          </label>
        </div>
        <div>
          <label><strong>Email:</strong>
            <input type="text" ref={emailRef} />
          </label>
        </div>
        <div>
          <label><strong>Password:</strong>
            <input type="text" ref={passwordRef} />
          </label>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
      {newUser && <div className='app'>
      <p>{newUser.userName}</p>
    </div>}
    </>
  )
}

export default add