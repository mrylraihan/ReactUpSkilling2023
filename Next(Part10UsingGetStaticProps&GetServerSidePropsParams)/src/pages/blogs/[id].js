import { useRouter } from 'next/router'
import React from 'react'

function single({data}) {
    console.log(data)
    const router = useRouter()
    const goBack = ()=>{
        router.back()
    }
    return (
    <div className='app'>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
            <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default single

export const getServerSideProps = async ({params})=>{
    const id = params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}