import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Post() {
	const [id, setId] = useState(1)

	const changeNumber = () => setId(Math.floor(Math.random() * 100) + 1)
	return (
		<>
			<div className='app'>
				<button onClick={changeNumber}>Show me a Different Post</button>
			</div>
			<PostBody id={id} />
		</>
	)
}

export default Post

export function PostBody({ id }) {
	const [text, setText] = useState('')

	useEffect(() => {
		const controller = new AbortController()
		fetch(`https://dummyjson.com/post/${id}`, {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then((result) => {
				// console.log(result)
				setText(result.body)
			})
			.catch(console.error)
		return () => {
			controller.abort()
		}
	}, [id])
	return (
		<div className='app'>
			<h1>PostBody</h1>
			<p>{text}</p>
		</div>
	)
}
