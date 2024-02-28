import React from 'react'
import Link from 'next/link'
function Navbar(props) {
  return (
		<>
			{/* <ul className='list-none m-0 p-0 overflow-hidden bg-gray-900'>
				<li className='float-left'>
					<a
						href='#'
						className='block text-white text-center py-3 px-4 no-underline'>
						Link 1
					</a>
				</li>
				<li className='float-left'>
					<a
						href='#'
						className='block text-white text-center py-3 px-4 no-underline'>
						Link 2
					</a>
				</li>
				<li className='float-left'>
					<a
						href='#'
						className='block text-white text-center py-3 px-4 no-underline'>
						Link 3
					</a>
				</li>
			</ul> */}
			<ul className='flex flex-col text-center md:flex-row justify-evenly bg-slate-300 p-3'>
				<Link href='/'>
					<li className='hover:underline'>Home</li>
				</Link>
				<Link href='/effects'>
					<li className='hover:underline'>useEffect Api-Hit</li>
				</Link>
				<Link href='/server'>
					<li className='hover:underline'>Get ServerSide</li>
				</Link>
				<Link href='/static'>
					<li className='hover:underline'>Get StaticSide</li>
				</Link>
				<Link href='/apiroute'>
					<li className='hover:underline'>Using Api Route</li>
				</Link>
			</ul>
			{props.children}
		</>
	)
}

export default Navbar
