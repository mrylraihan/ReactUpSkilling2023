import React, { useEffect, useRef } from 'react'

function LoginForm({toggle, user, setUser}) {
    const nameRef = useRef()
    const passwordRef = useRef()
    console.log(user, ' :user')

    useEffect(()=>{
        if(user)toggle()
    },[user])

    const onSubmitHandler = e => {
        e.preventDefault()
        let name = nameRef.current.value
        let password = passwordRef.current.value
        if (name && password){
            setUser({
                username: name,
                password: password,
            })
        }
      
        nameRef.current.value = ''
        passwordRef.current.value = ''
    }

    return (
<div>

        <form onSubmit={onSubmitHandler}>
            <div>
                <label>UserName:
                    <input type="text" ref={nameRef} />
                </label>
            </div>
            <div>
                <label>Password:
                    <input type="text" ref={passwordRef} />
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={toggle}>leave Login</button>
</div>

    )
}

export default LoginForm