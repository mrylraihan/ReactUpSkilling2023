import React, { useState } from 'react'

function TestingUseState() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState()


    const getFirstName = e => setFirstName(e.target.value)
    const getLastName = e => setLastName(e.target.value)

    const submitHandler = e =>{
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
        setFirstName('')
        setLastName('')
    }


    console.log(fullName)
    return (
        <div className='app'>
            <h2>useState Form</h2>
            <h5>{fullName}</h5>
            <form onSubmit={submitHandler}>
                <div>
                    <label> First Name:
                        <input type="text" value={firstName} onChange={getFirstName} />
                    </label>
                </div>
                <div>
                    <label> Last Name:
                        <input type="text" value={lastName} onChange={getLastName} />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default TestingUseState