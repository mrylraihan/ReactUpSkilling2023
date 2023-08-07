import React, { useState } from 'react'

function UseStateForm2() {
    const [name, setName] = useState({
        firstName:'', 
        lastName:'',
        fullName:''
    })

    const getFirstName = e =>{
        setName(prev=>{
            return {...prev, firstName:e.target.value}
        })
    }
    const getLastName = e =>{
        setName(prev=>{
            return {...prev, lastName:e.target.value}
        })
    }
    const getFullName = e =>{
        e.preventDefault()
        setName(prev=>{
            console.log(prev)
            return {...prev, fullName:`${prev.firstName} ${prev.lastName}`, lastName:'', firstName:''}
        })
        console.log(name)//still the old state
    }
    console.log(name)//new state after each re-render
  return (
      <div className='app'>
          <h1>UseStateForm2</h1>
          {name.fullName && <h2>{name.fullName}</h2>}
          <form onSubmit={getFullName}>
              <div>
                  <label>FirstName:
                      <input type="text" value={name.firstName} onChange={getFirstName}/>
                  </label>
              </div>
              <div>
                  <label>LastName:
                      <input type="text" value={name.lastName} onChange={getLastName}/>
                  </label>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
  )
}

export default UseStateForm2