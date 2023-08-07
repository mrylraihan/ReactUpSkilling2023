import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ShowAll() {
    const [notes, setNotes] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:4000/note/')
        .then(res=>res.json())
        .then(setNotes)
        .catch(console.error)
    },[])

    console.log(notes)

  return (
    <div>
          <h1>ShowAll</h1>
          <ul>
              {notes.map(ele => <li key={ele._id} onClick={nav.bind(this,`${ele._id}`)}>{ele.title}</li>)}
          </ul>
    </div>
  )
}

export default ShowAll