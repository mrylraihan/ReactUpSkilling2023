import React from 'react'
import { useLoaderData } from 'react-router-dom'
function All() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='app'>
      <h1>All</h1>
      {data.map(ele=><p key={ele.id}>{ele.title}</p>)}
    </div>
  )
}

export default All

export function loader(){
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
}