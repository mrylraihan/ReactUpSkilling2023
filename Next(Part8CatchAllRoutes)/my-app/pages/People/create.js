import { useRouter } from 'next/router'
import React, { useRef } from 'react'

function create(props) {
    const nameRef= useRef()
    const router = useRouter()

    const onSubmitHandler = e =>{
        e.preventDefault()
        props.setPeople(prev=>{
            return [...prev, {id:prev[prev.length-1].id+2, name: nameRef.current.value}]
        })
        nameRef.current.value= ''
        router.back()
    }

  return (
    <div  className='app'>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name : 
                      <input type="text" ref={nameRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default create