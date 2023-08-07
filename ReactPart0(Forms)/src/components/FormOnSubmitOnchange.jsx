import React from 'react'
import { useState } from 'react'

function FormOnSubmitOnchange() {
const [fullName, setFullName] = useState({})

    const formOnChangeHandler = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setFullName(prev=>({...prev, [name]:value}))
    }
    const OnSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(fullName)
        setFullName({firstName:'', lastName:''})
    }
  return (
    <div className='app'>
          <h1>FormOnSubmitOnchange</h1>
          <form onSubmit={OnSubmitHandler}onChange={formOnChangeHandler}>
              <div>
                  <label>First Name :
                      <input type="text" name={'firstName'}value={fullName.firstName} />
                  </label>
              </div>
              <div>
                  <label>Last Name :
                      <input type="text" name={'lastName'}value={fullName.lastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
    </div>
  )
}

export default FormOnSubmitOnchange