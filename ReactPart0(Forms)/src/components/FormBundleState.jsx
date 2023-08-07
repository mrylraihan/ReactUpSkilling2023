import React from 'react'
import { useState } from 'react'

function FormBundleState() {
    const [name, setName] = useState({firstName:'', lastName:'', fullName:''})
    const getFirstName = (e) => {
        setName(prev=>{
            return { ...prev, firstName: e.target.value }
        })
    }
    const getLastName = (e) => {
        setName(prev => {
            return { ...prev, lastName: e.target.value }
        })
    }
    const getFullName = (e) => {
        e.preventDefault()
        setName(prev => {
            return { ...prev, fullName: `${name.firstName} ${name.lastName}`, firstName:'', lastName:'' }
        })
    }
    console.log(name)
  return (
    <div className='app'>
          <h1>FormBundleState</h1>
          <h1>{name.fullName}</h1>
          <form onSubmit={getFullName}>
              <div>
                  <label>First Name :
                      <input type="text" value={name.firstName} onChange={getFirstName} />
                  </label>
              </div>
              <div>
                  <label>Last Name :
                      <input type="text" value={name.lastName} onChange={getLastName} />
                  </label>
              </div>
              <button>Submit</button>
          </form>
    </div>
  )
}

export default FormBundleState