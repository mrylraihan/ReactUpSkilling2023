import { useRouter } from 'next/router'
import React from 'react'

function singlePage(props) {
  const router = useRouter()
  const id = router.query.id
  console.log(router.query, 'router.query')
  console.log(props, 'props')
  const person = props.people[id]
  return (
    <div className='app'>
      <h1>Single Page: {id}</h1>
        <h3>{person.name}</h3>
        <ul>
        {person.hobbies.map(ele=>{
          return <li onClick={()=>router.push(`${id}/hobbies/${ele.id}`)} key={ele.hobby}>{ele.hobby}</li>
        })}
        </ul>
        <button onClick={router.back}>Go back to people</button>
    </div>
  )
}

export default singlePage

export const getServerSideProps = async ({ query, params }) =>{

  return {
    props:{
      query, params
    }
  }
}