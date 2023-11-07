import { useRouter } from 'next/router'
import React from 'react'

function user(props) {
    const router = useRouter()
    console.log("router.query.id:", router.query.id)
    console.log("props:", props)
  return (
    <div>user: {router.query.id}</div>
  )
}

export default user

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    let paths = data.map(ele=>{
        return {
            params: {
                id: `${ele.id}`
            }}
    })
    return {
        fallback:true, 
        paths:paths
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const data = await res.json()
    return {
        props: {
            data: data,
            id:id
        }
    }
}