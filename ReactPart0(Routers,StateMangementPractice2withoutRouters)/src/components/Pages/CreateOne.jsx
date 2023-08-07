import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function CreateOne({setPeople}) {
  // const namRef = useRef()
  const [name, setName] = useState('')
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    // console.log(namRef.current.value)
    // setPeople(prev=>{
    //   return [...prev, namRef.current.value]
    // })
    setPeople(prev=>{
      return [...prev, name]
    })
    setName('')

    // namRef.current.value = ''
  }
  return (
    <div className='app'>
      <h1>CreateOne</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Give a Name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateOne