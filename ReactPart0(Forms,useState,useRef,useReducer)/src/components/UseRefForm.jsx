import React, { useRef, useState } from 'react'

function UseRefForm() {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const [fullName, setFullName] = useState('')

    console.log(firstNameRef)
    console.log(lastNameRef)

    const getFullName = e =>{
        e.preventDefault()
        console.log(firstNameRef.current.value)
        console.log(lastNameRef.current.value)
        setFullName(`${firstNameRef.current.value} ${lastNameRef.current.value}`)
        firstNameRef.current.value = ''
        lastNameRef.current.value = ''
    }
  return (
      <div className='app'>
          <h1>UseRefForm</h1>
          {fullName && <h2>{fullName}</h2>}
          <form onSubmit={getFullName}>
              <div>
                  <label>FirstName:
                      <input type="text" ref={firstNameRef}/>
                  </label>
              </div>
              <div>
                  <label>LastName:
                      <input type="text" ref={lastNameRef}/>
                  </label>
              </div>
              <button>Submit</button>
          </form>
      </div>
  )
}

export default UseRefForm