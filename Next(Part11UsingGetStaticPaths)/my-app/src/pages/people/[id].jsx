import { useRouter } from 'next/router'
import React from 'react'

function user(props) {
    const router = useRouter()
    console.log(router.query.id)
    console.log(props)
  return (
    <div className='app'>
        <h1>Single User</h1>
        <h3>{props.user.name}</h3>
        <button onClick={router.back}>go back</button>
    </div>
  )
}

export default user

export const getStaticPaths = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    return {
        fallback:false,
        paths:users.map(ele=>{
            return {params:{id:`${ele.id}`}}
        })
    }
}

export const getStaticProps = async (context) =>{
    const params = context.params
    let id=params.id;
    const data = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const user = await data.json()
    return {
        props:{
            paramsId :id,
            user: user
        }
    }
}