import React, { useEffect, useState } from 'react'

function index() {
  	const [hasChanged, setHasChanged] = useState(false)
    const [formData, setFormData] = useState({})
    const [user, setUser] = useState('')

    	useEffect(() => {
				if (!hasChanged) return

				function handleBeforeUnload(event) {
					event.preventDefault()
					console.log('test')

					return (event.returnValue = 'hey did you mean to do that?')
				}
				// window.addEventListener('beforeunload', handleBeforeUnload, {capture:true})
				window.addEventListener('beforeunload', handleBeforeUnload)

				return (event) => {
					setUser(event.returnValue)
					window.removeEventListener('beforeunload', handleBeforeUnload)
				}
			}, [hasChanged])

    	const handleHasOnChange = (e) => {
				let newFormData = new FormData()
				newFormData.append(e.target.name, e.target.value)
        newFormData = Object.fromEntries(newFormData.entries())
				setFormData(newFormData)
				setHasChanged(true)
				console.log('handleHasOnChange')
			}
          console.log(formData)
					console.log(user)
  return (
		<div className='container mx-auto max-w-screen-lg justify-center'>
			<h1 className='mx-auto text-center m-5'>BeforeUnload</h1>
			<h2>{user}</h2>
			<form
				onChange={handleHasOnChange}
				className='max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2">
					Nothing:
					<input type='text' name='entry'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
				</label>
        </div>
				<button className='btn py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900'>
					Click me
				</button>
			</form>
		</div>
	)
}

export default index
