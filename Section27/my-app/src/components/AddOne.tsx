import React, { useState } from 'react'

const AddOne: React.FC<{ addName :(text:string)=>void}> = (props) => {
    const [name, setName] = useState<string>('')
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const onSubmitHandler = (e:React.FormEvent)=>{
        e.preventDefault()
        if(name.trim().length===0)return
        props.addName(name)
        setName('')
    }
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>Add One</h2>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Name:
						<input type='text' value={name} onChange={onChangeHandler} />
					</label>
				</div>
                <button type='submit'>submit</button>
			</form>
			</header>
		</div>
	)
}

export default AddOne