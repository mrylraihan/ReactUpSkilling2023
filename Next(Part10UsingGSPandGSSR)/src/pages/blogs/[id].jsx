import { useRouter } from 'next/router'
import React from 'react'

function singleBlog(props) {
    const router = useRouter()
    const routerObj = router.query
    console.log(routerObj, 'router')
    console.log(props)
  return (
    <div className='app'>
          <h1>singleBlog</h1>
          <h3>{props.blog.title}</h3>
          <p>{props.id}</p>
    </div>
  )
}

export default singleBlog

export const getServerSideProps = async ({params})=>{
    const id = params.id
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const blog = await result.json()
    return {
        props:{
            id,
            blog
        }
    }
}