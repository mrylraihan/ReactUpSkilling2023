import React, { useState } from 'react'

const initial = {
    firstName :'',
    lastName:'',
    fullName:''
}

function TestState() {
    const [name, setName] = useState(initial)
    console.log('useState', name);
    const onChangeFirst = e =>{
        setName(prev=>{
            return { ...prev, firstName:e.target.value }
        })
    }
    const onChangeLast = e =>{
        setName(prev => {
            return { ...prev, lastName: e.target.value }
        })
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        setName(prev=>{
            return {...prev, fullName:`${prev.firstName} ${prev.lastName}`}
        })
    }
  return (
    <div className='app'>
          <h1>TestState</h1>
              {name.fullName && <h3>{name.fullName}</h3> }
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label>
                      <input type="text" value={name.firstName} onChange={onChangeFirst}/>
                  </label>
              </div>
              <div>
                  <label>
                      <input type="text" value={name.lastName} onChange={onChangeLast}/>
                  </label>
              </div>
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default TestState