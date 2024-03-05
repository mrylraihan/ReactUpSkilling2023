import React, { useEffect } from 'react'

function SecondLayer() {
	useEffect(() => {
		if (!localStorage.getItem('value')) {
			fetch('https://jsonplaceholder.typicode.com/posts/1')
				.then((response) => response.json())
				.then(() => {
					console.log('from SecondLayer')
					localStorage.setItem('value', 'Second Layer from LocalStorage')
				})
		} else {
			console.log(localStorage.getItem('value'))
		}
	}, [])
	const clearHandler = () => localStorage.clear()
	return (
		<div className='app'>
			<h1>Second Layer</h1>
			<button onClick={clearHandler}>Clear</button>
		</div>
	)
}
export default SecondLayer
