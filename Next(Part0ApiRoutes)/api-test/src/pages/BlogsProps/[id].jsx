import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function SingleBlog(props) {
    const router = useRouter()
    const id = router.query.id


    console.log(id)
    console.log(props)
  return (
		<div>
			<h2>ID:{id} From Router.Query</h2>
			<div
				className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center'>
				<h1 className='text-center font-bold'>{props.result.title}</h1>
                <p>
                   <span className='font-bold'>Body: </span>{props.result.body}</p>
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

export const getStaticPaths = async () => {
	const data = await fetch('http://localhost:3000/api/blog')
	const result = await data.json()
	let paths = result.map(ele=>{
		return {params:{id:`${ele.id}`}}
	})
	return {
		paths,
		fallback: false, //
	}
}


export const getStaticProps = async (context) => {
	const id = context.params.id
	const data = await fetch('http://localhost:3000/api/blog/'+id)
	const result = await data.json()
	return {
		props: {
			result,
		},
	}
}
