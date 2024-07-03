import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='App'>
			<section className='App-nav'>
				<h2>Navbar</h2>
				<Link to='/'>
					<p>Home</p>
				</Link>
				<Link to='/show'>
					{' '}
					<p>Show All</p>
				</Link>
				<Link to='add'>
					{' '}
					<p>Add One</p>
				</Link>
			</section>
		</div>
	)
}

export default Navbar
