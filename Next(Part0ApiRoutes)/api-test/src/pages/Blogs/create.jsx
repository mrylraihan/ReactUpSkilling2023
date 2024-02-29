import React , { useState, useRef } from 'react'

function create() {
    const titleRef = useRef()
    const bodyRef = useRef()
    const [newBlog, setNewBlog] = useState()

    const onSubmitHandler = e =>{
        e.preventDefault()
        let options = {
					method: 'POST',
					body: JSON.stringify({
						title: titleRef.current.value,
						body: bodyRef.current.value,
						userId: 1,
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
        fetch('../api/blog', options)
					.then((res) => res.json())
					.then(result=>{
                        setNewBlog(result)
                        console.log(result)
                    })
					.catch(console.error)

    }
    console.log(newBlog)
  return (
    <>
		<div>
			<h1 className='max-w-sm mx-auto mt-8 text-2xl'>Create a Blog</h1>
			<form onSubmit={onSubmitHandler} className='max-w-sm mx-auto mt-8'>
				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Title:
						<input
							type='text'
							ref={titleRef}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
					</label>
				</div>
				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Body:
						<input
							type='text'
							ref={bodyRef}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
					</label>
				</div>
				<button
					type='submit'
					className='w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
					Submit
				</button>
			</form>
		</div>
        <div>
            
        </div>
    </>
	)
}

export default create
