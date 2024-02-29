import Link from 'next/link'
import React from 'react'

function Navbar(props) {
  return (
		<>
			<div>
				<ul className='list-none m-0 p-0 overflow-hidden bg-gray-900'>
					<li className='float-left'>
						<Link
							href='/'
							className='block text-white text-center py-3 px-4 no-underline'>
							Home
						</Link>
					</li>
					<li className='float-left'>
						<Link
							href='/Blogs'
							className='block text-white text-center py-3 px-4 no-underline'>
							Blogs With useEffect
						</Link>
					</li>
					<li className='float-left'>
						<Link
							href='/Blogs/create'
							className='block text-white text-center py-3 px-4 no-underline'>
							create a blog a ApiRoute
						</Link>
					</li>
					<li className='float-left'>
						<Link
							href='/BlogsProps'
							className='block text-white text-center py-3 px-4 no-underline'>
							Blogs With GetStaticProps
						</Link>
					</li>
					<li className='float-left'>
						<Link
							href='about'
							className='block text-white text-center py-3 px-4 no-underline'>
							About
						</Link>
					</li>
					<li className='float-left'>
						<Link
							href='extra'
							className='block text-white text-center py-3 px-4 no-underline'>
							Extra
						</Link>
					</li>
				</ul>
			</div>
			{props.children}
		</>
	)
}

export default Navbar
