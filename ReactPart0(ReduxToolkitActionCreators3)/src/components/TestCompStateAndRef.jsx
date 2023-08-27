import React, { useRef, useState } from 'react'

function TestCompStateAndRef() {
    const [fullName, setFullName] = useState('')
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        let firstName = firstNameRef.current.value
        let lastName = lastNameRef.current.value
        setFullName(`${firstName} ${lastName}`)
        firstNameRef.current.value = '';
        lastNameRef.current.value = ''
    }
    console.log(fullName)
  return (
    <div>
          <h1>TestCompStateAndRef</h1>
          {fullName && <h3>{fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    First Name:
                    <input type="text" ref={firstNameRef}/>
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" ref={lastNameRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default TestCompStateAndRef