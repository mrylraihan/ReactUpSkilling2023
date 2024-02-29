import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function SingleBlog() {
    const router = useRouter()
    const id = router.query.id
    const [blog, setBlog] = useState('')

    useEffect(()=>{
					fetch(`/api/blog/${id}`)
					.then((res) => res.json())
					.then((result) => {
						setBlog(result)
						console.log(result)
					})
					.catch(console.error)
    },[id])

    console.log(id)
    console.log(blog)
  return (
		<div>
			<h2>ID:{id} From Router.Query</h2>
			<div
				className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center'>
				<h1 className='text-center font-bold'>{blog.title}</h1>
                <p>
                   <span className='font-bold'>Body: </span>{blog.body}</p>
				<button
					className='rounded-md p-2 bg-blue-500 text-white hover:bg-blue-200 px-6'
					onClick={router.back}>
					See Details
				</button>
			</div>
		</div>
	)
}

export default SingleBlog
