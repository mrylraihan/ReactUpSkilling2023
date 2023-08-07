import React from 'react'
import { useState } from 'react'

function FormState() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    const getFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const getLastName = (e) =>{
        setLastName(e.target.value)
    }
    const getFullName = (e) =>{
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
        setFirstName('')
        setLastName('')
    }
  return (
    <div className='app'>
        <h1>Form with separate state</h1>
        <h1>{fullName}</h1>
        <form onSubmit={getFullName}>
            <div>
                <label>First Name :
                    <input type="text" value={firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>Last Name :
                    <input type="text" value={lastName} onChange={getLastName}/>
                </label>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormState