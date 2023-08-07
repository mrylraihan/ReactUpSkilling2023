import React, { useState } from 'react'

function AddOne(props) {
    const [name, setName] = useState('')

    const getName = (e) =>{
        e.preventDefault()
        props.setList(prev=>{
            return [...prev, name]
        })
        setName('')
    }
  return (
    <div className='app'>
          <h1>AddOne</h1>
          <form onSubmit={getName}>
            <div>
                <label>Name:
                    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default AddOne