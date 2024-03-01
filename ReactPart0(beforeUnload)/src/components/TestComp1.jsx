import React, { useEffect, useState } from 'react'

function TestComp1() {
    const [hasChanged, setHasChanged]= useState(false)
	const [formData, setFormData] = useState({ name: '', address: '' })
	const [submitData, setSubmitedData] = useState({ name: '', address: '' })
	
    useEffect(()=>{
        if(!hasChanged)return 

        function handlerBeforeUnload(e){
            e.preventDefault(); 
            console.log('test')
			// 
            return (e.returnValue = 'Hey did you mean to do that?')
        }

        window.addEventListener('beforeunload', handlerBeforeUnload)

        return ()=>{
            window.removeEventListener('beforeunload', handlerBeforeUnload)
        }
    },[hasChanged])

    const handleInputChange = (e) => {
        setHasChanged(true)
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	
    const submitHandler = (e) => {
		e.preventDefault()
		setSubmitedData(formData)
		setFormData({ name: '', address: '' })
	}
	
    console.log(formData)
	console.log(submitData)
	
    return (
		<div className='app'>
			<form onSubmit={submitHandler}>
				<div>
					<label>
						Name:
						<input
							type='text'
							name='name'
							onChange={handleInputChange}
							value={formData.name}
						/>
					</label>
				</div>
				<div>
					<label>
						Address:
						<input
							type='text'
							name='address'
							onChange={handleInputChange}
							value={formData.address}
						/>
					</label>
				</div>
				<button>submit</button>
			</form>
		</div>
	)
}

export default TestComp1
