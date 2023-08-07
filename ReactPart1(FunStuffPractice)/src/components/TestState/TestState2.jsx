import React, { useState } from 'react'

const initial = {
    firstName:'',lastName:'',fullName:''
}
function TestState2() {
    const [name, setName] = useState(initial)
    console.log(name, ":TestState2")
    const getFirstName = e =>{
        setName(prev=>{
            return {...prev, firstName: e.target.value}
        })
    }
    const getLastName = e =>{
        setName(prev => {
            return { ...prev, lastName: e.target.value }
        })
    }
    const getFullName = () =>{
        setName(prev => {
            return { ...prev, fullName: `${prev.firstName} ${prev.lastName}`, firstName:'', lastName:'' }
        })
    }
    return (
    <div className='app'>
          <h1>TestState2</h1>
          <h2>{name.fullName}</h2>
          <div>
            <label>
                <input type="text" value={name.firstName} onChange={getFirstName}/>
            </label>
          </div>
          <div>
            <label>
                <input type="text" value={name.lastName} onChange={getLastName} />
            </label>
          </div>
          <button onClick={getFullName}>Submit</button>
    </div>
  )
}

export default TestState2