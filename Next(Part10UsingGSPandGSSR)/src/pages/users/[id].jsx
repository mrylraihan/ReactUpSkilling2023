import { useRouter } from 'next/router'
import React from 'react'

function singleUser(props) {
    const router = useRouter()
    const routerObj = router.query
    console.log(routerObj, 'router')
    console.log(props)
  return (
    <div className='app'>
          <h1>singleUser</h1>
          <h3>{props.user.name}</h3>
          <p>{props.id}</p>
    </div>
  )
}

export default singleUser

export const getServerSideProps = async ({params})=>{
    const id = params.id
    const result = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const user = await result.json()
    return {
        props:{
            id,
            user
        }
    }
}