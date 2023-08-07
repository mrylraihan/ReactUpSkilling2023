import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {fnGetall} from '../utililties/fn'

function ShowAll() {
    const [post , setPost] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        fnGetall(setPost)
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>res.json())
        // .then(setPost)
        // .catch(console.error)
    },[])

    const content = post.map((ele,index)=>{
        return <li key={index} onClick={nav.bind(this,`${ele.id}`)}>{ele.title}</li>
    })

  return (
    <div className='app'>
        <h1>Show All</h1>
        <ul>
        {post.length>0 && content}
        </ul>
    </div>
  )
}

export default ShowAll