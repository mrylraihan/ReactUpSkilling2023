import { useRouter } from 'next/router'
import React from 'react'

function index({allPost}) {
    const router = useRouter()
    let content = allPost.map(ele=>{
       return  <div key={ele.id} className='app'>
            <h3>{ele.title}</h3>
            <p>{ele.body}</p>
            <button onClick={()=>router.push(`post/${ele.id}`)}>See Details</button>
        </div>
    })
    console.log(allPost)
  return (
    <>
    <div className='app'>
    <button onClick={router.back}>Go Back</button>
    </div>
    {content}
    </>
  )
}

export default index