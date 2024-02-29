import React from 'react'
import { useRouter } from 'next/router'

function about() {
  const router = useRouter()
  return (
		<div className='flex justify-center'>
			<button
				className='rounded-md p-2 bg-blue-500 text-white hover:bg-blue-200 px-6'
				onClick={router.back}>
				go back
			</button>
		</div>
	)
}

export default about
    