import React, { useState } from 'react'

function FormUseState() {
    const [userInput, setUserInput] = useState({name:'',email:''})
    const [user, setUser] = useState('') 

    const getName = (e) =>{
        setUserInput(prev=>{
            return {...prev, name:e.target.value}
        })
    }
    const getEmail = (e) =>{
        setUserInput(prev => {
            return { ...prev, email: e.target.value }
        })
    }
    console.log(userInput)

    const submitHandler = (e)=>{
        e.preventDefault()
        setUser(userInput)
        setUserInput({ name: '', email: '' })
        
    }
    console.log(user, "user")

  return (
    <div className='app'>
          <h1>FormUseState</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label>name:
                    <input type="text" value={userInput.name} onChange={getName}/>
                </label>
            </div>
            <div>
                <label>email:
                      <input type="text" value={userInput.email} onChange={getEmail}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
          {user.name && <h2>{user.name}</h2>}
    </div>
  )
}

export default FormUseState