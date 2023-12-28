import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

function Add() {
    const [chore, setChore] = useState('')
    const inputRef = useRef()
    const router = useRouter()
    const onSubmitHandler = e =>{
        e.preventDefault()
        const inputValue = inputRef.current.value
        fetch('./api/chore/add', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({chore:inputValue})
        })
        .then(res=>res.json())
        .then(result=>{
            setChore(result)
            console.log(result)
        })
        .catch(console.error)
        inputRef.current.value = ''
    }
  return (
    <>
    <div className='app'>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Chore:
                      <input type="text" ref={inputRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>
          <button onClick={()=>router.push('/')}>Go home</button>
    </div>
    {chore && <div className='app'>
        <h2>{chore.chore}</h2>
        <h3>{chore._id}</h3>
    </div>}
          
    </>
  )
}

export default Add