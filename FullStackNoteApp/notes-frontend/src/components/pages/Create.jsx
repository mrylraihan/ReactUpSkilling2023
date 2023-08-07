import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [newNote, setNewNote] = useState('')
    const titleRef = useRef() //title
    const bodyRef = useRef()//body
    const nav = useNavigate()

    console.log(newNote)
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        const title = titleRef.current.value
        const body = bodyRef.current.value
        const options = {
            method: 'POST',
            body: JSON.stringify({note:{
                title: title,
                body: body
            }}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
       
        fetch('http://localhost:4000/note/',options)
            .then(res => res.json())
            .then(setNewNote)
            .catch(console.error)

        titleRef.current.value = ''
        bodyRef.current.value = ''
    }

  return (
    <>
    <div>
          <h1>Create</h1>
              <form onSubmit={onSubmitHandler}>
            <div>
                <label>title:
                    <input type="text" ref={titleRef}/>
                </label>
            </div>
            <div>
                <label>body:
                    <input type="text" ref={bodyRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
    <div>
        {newNote && <h6>{newNote.title}</h6>}
    </div>
    <button onClick={nav.bind(this,-1)}>go back</button>
    </>
  )
}

export default Create