import React from 'react'
import {useLoaderData, useParams} from 'react-router-dom'
function People() {
    const id = useParams().id
    const person = useLoaderData()
console.log(person)
  return (
    <div className='app'>
      <h1>People {id}</h1>
    {person.name && <h3>{person.name}</h3>  }
    {person.id && <h3>{person.id}</h3>  }
    </div>
  )
}

export default People

export const  onePersonLoader=({params})=>{
  const id = params.id
  return fetch('http://localhost:4005/people')
    .then(res => res.json())
    .then(result=> result.find((item) => {
      return item.id == id
    }))
    .catch(console.error)
    .then(()=>[1,2,3])
}