import { useRouter } from 'next/router'
import React from 'react'

function details(props) {
  const router = useRouter()
  const id = router.query.id
  console.log(props)
  console.log(id)
  return (
    <div className='app'>
      <p>from useRouter {id}</p>
      <p>from props {props.id}</p>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <button onClick={router.back}>go back</button>
    </div>
  )
}

export default details

export async function getServerSideProps(context){
  const {params} = context
  const id = params.id
 return  fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  .then(res=>res.json())
  .then(result=>{
    return {
      props: result
    }
  })
}