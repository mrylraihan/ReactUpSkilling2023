import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Post() {
    const [list , setList] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(setList)
        .catch(console.error)
    },[])

    const navigateTo = id => nav(`/post/${id}`)

    let content = list.map(ele=>{
        return <li key={ele.id} onClick={navigateTo.bind(this, `${ele.id}`)}>{ele.title}</li>
        // return <li key={ele.id} onClick={nav.bind(this, `${ele.id}`)}>{ele.title}</li>
    })
  return (
    <div>
      {list.length>0?content:<h1>Loading data</h1>}
    </div>
  )
}

export default Post
   