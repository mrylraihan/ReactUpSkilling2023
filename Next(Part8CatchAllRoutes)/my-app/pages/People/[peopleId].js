import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Single(props) {
const [person, setPerson] = useState('')
const router = useRouter()
let id = router.query.peopleId

useEffect(()=>{
    let data = props.people.find(ele=>ele.id == id)
    console.log(data)
    setPerson(data)
},[])
console.log(id)
console.log(person)
console.log(props.people)
const deleteHandler = ()=>{
    props.setPeople(prev=>{
        return prev.filter(ele=>id != ele.id)
    })
    router.back()
}
  return (
    <div className='app'>
       {person && <h1>{person.name}</h1>}
        <button onClick={router.back}>Go back</button>
        <button onClick={deleteHandler}>delete me</button>
    </div>
  )
}

export default Single