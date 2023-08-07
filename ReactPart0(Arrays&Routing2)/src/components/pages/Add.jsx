import React, { useState } from 'react'

function Add({setPeople}) {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState('')
    const nameHandler = e => {
        setName(e.target.value)
        setSuccess('')
    }
    const addHandler = e =>{
        e.preventDefault()
        if(name.trim()){
            setPeople(prev=>{
                return [...prev, {name, id:prev.length}]
            })
            setName('')
            setSuccess('person was added!')
        }
    }
  return (
    <div className='app'>
        <h3>Add</h3>
        {success && <h5>{success}</h5>}
        <form onSubmit={addHandler}>
            <div>
                <label>Name:
                    <input type="text" value={name} onChange={nameHandler}/>
                </label>
                <button type='submit'>submit</button>
            </div>
        </form>
    
    </div>
  )
}

export default Add