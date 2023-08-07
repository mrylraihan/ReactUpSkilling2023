import React from 'react'
import { useRef } from 'react'

function CreateOneRef({setPeople}) {
  const namRef = useRef()

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    console.log(namRef.current.value)
    let name = namRef.current.value
    setPeople(prev=>{
      return [...prev, name]
    })

    namRef.current.value = ''
  }
  return (
    <div className='app'>
      <h1>CreateOneRef</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Give a Name:
            <input type="text" ref={namRef}/>
          </label>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateOneRef