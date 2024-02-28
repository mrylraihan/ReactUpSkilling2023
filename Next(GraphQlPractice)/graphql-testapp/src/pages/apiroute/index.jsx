import React, { useEffect, useState } from 'react'

function index(props) {
	const [list, setList] = useState([])
	useEffect(() => {
		fetch('/api/getData')
			.then((res) => res.json())
			.then((result) => setList(result.data.data.allPeople.people))
			.catch(console.error)
	}, [])
	console.log(list)
	console.log(props)
	let content = list.map((person, idx) => {
		return (
			<div
				key={idx}
				className='mx-auto mt-12 w-80 p-4 bg-white shadow-lg rounded-lg text-center'>
				<h1 className='text-center'>{person.name}</h1>
				{/* Other content */}
			</div>
		)
	})
	return (
		<div>
			<h1 className='text-center'>Test</h1>
			{content}
		</div>
	)
}

export default index

export async function getStaticProps() {
	return fetch('http://localhost:3000/api/getData')
		.then((res) => res.json())
		.then((result) => {
			return { props: { data: result.data.data } }
		})
		.catch(console.error)
}
