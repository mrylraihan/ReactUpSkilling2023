import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowSingle() {
    const [note, setNote] = useState('')
    const params = useParams()
    const id = params.id
    const nav = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:4000/note/${id}`)
            .then(res => res.json())
            .then(setNote)
            .catch(console.error)
    },[])
    console.log(note)

    const deleteNote = () =>{
        const options = {
            method: 'Delete',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        fetch(`http://localhost:4000/note/${id}`, options)
            .then(res => res.json())
            .then(()=>nav(-1))
            .catch(console.error)
    }

  return (
    <div>
          <h1>ShowSingle</h1>
          {note && <div>
            <h3>{note.title}</h3>
            <h5>{note.body}</h5>
          </div>}
          <button onClick={nav.bind(this, -1)}>go back</button>
          <button onClick={deleteNote}>delete</button>
    </div>
  )
}

export default ShowSingle