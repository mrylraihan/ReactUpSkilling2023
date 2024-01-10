import { useRouter } from 'next/router'
import { useState } from 'react'

function details(props) {
  const [notes, allNotes] = useState([])
  const router = useRouter()
  const data = props.data
  console.log(props)
  console.log(notes)
  const getAllNotes = ()=>{
    fetch(`../api/notes/${data._id}`)
    .then(res=>res.json())
    .then(allNotes)
    .catch(console.error)
  }
  return (
    <>
    <div className='app'>
      <h1>{data.userName}</h1>
      <p>{data.email}</p>
      <p>{data.password}</p>
      <p>{data._id}</p>
        <button onClick={getAllNotes}>See all Notes by user</button>
        <button onClick={router.back}>go back to all Users</button>
    </div>
    <div>
    {notes.map(ele=><li key={ele._id}>{ele.title}</li>)}
    </div>
    </>
  )
}

export default details

export const getServerSideProps = async(context)=>{
  const res = await fetch('http://localhost:3000/api/users/' + context.query.id)
  const data = await res.json();
  return {
    props:{
      data:data,
      context:context.params,
      query:context.query
    }
  }

}