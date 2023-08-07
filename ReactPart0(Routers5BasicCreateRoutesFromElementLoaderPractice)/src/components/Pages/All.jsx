import React from 'react'
import {useNavigate, useLoaderData} from 'react-router-dom' 
function All() {
  //  json-server -p 4005 -w ./data/db.json run this in your project before running
  let people = useLoaderData()
  console.log(people)


    const nav = useNavigate()
    // const peoples = [1,2,3]
  return (
    <div className='app'>
        <h1>All</h1>
        {people.map((ele,idx)=>{
            return <p onClick={nav.bind(this,`${ele.id?ele.id:ele}`)} key={idx}>num: {ele.name?ele.name:ele}</p>
        })}
    </div>
  )
}

export default All

export const peopleLoader = async ()=>{
  return fetch('http://localhost:4005/people')
  .then(res=>res.json())
  // .then(console.log)
    .catch(console.error)
    .then(() => [1, 2, 3])
}
