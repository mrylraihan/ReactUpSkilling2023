import React from 'react'
import { useState } from 'react'

function UseStateForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    const getFirstName = e =>{
        setFirstName(e.target.value)
    }

    const getLastName = e =>{
        setLastName(e.target.value)
    }

    const getFullName = e =>{
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
        setFirstName('')
        setLastName('')
    }
    console.log(firstName)
    console.log(lastName)
    console.log(fullName)
  return (
    <div className='app'>
          <h1>UseStateForm</h1>
          {fullName && <h2>{fullName}</h2>}
        
        <form onSubmit={getFullName}>
            <div>
                <label>FirstName:
                    <input type="text" value={firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>LastName:
                    <input type="text" value={lastName} onChange={getLastName}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default UseStateForm