import React, { useState } from 'react'


function UseStateTest() {
  const defaultName = {firstName:'', lastName:'', fullName:""}
  const [name, setName] = useState(defaultName)

  const getFirstName = e =>{
    setName(prev=>{
      return {...prev, firstName:e.target.value}
    })
  }
  const getLastName = e =>{
    setName(prev => {
      return { ...prev, lastName: e.target.value }
    })
  }
  
  const onSubmitHandler = e =>{
    e.preventDefault()
    setName(prev=>{
      return {...prev, fullName: `${prev.firstName} ${prev.lastName}`, firstName:'', lastName:''}
    })
  }
console.log(name);
  return (
    <div className='app'>
      <h5>UseStateTest</h5>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>firstname:
            <input type="text" value={name.firstName} onChange={getFirstName}/>
          </label>
        </div>
        <div>
          <label>lastname:
            <input type="text" value={name.lastName} onChange={getLastName}/>
          </label>
        </div>
        <button>Submit</button>
      </form>
      {name.fullName && <h4>{name.fullName}</h4>}
    </div>
  )
}

export default UseStateTest