import React, { useState } from 'react'
export type Name ={
    firstName:string,
    lastName:string,
    fullName:string,
}

function TestUseState() {
    const [name, setName] = useState<Name>({
    firstName:'',
    lastName:'',
    fullName:'',
})

const firstNameHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(prev=>{
        return {...prev, firstName: e.target.value}
    })
}
const lastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	setName((prev) => {
		return { ...prev, lastName: e.target.value }
	})
}
const submitHandler = (e:React.FormEvent)=>{
    e.preventDefault()
    console.log(name)
    setName({
			firstName: '',
			lastName: '',
			fullName: '',
		})
}
  return (
		<div className='App'>
            <div className='App-header'>
			<h1>TestUseState Form</h1>
    <p>firstName: {name.firstName}</p>
    <p>lastName: {name.lastName}</p>
			<form onSubmit={submitHandler}>
				<div>
					<label>firstName: 
						<input type='text' value={name.firstName} onChange={firstNameHandler} />
					</label>
				</div>
				<div>
					<label>lastName: 
						<input type='text' value={name.lastName} onChange={lastNameHandler} />
					</label>
				</div>
                <button type='submit'>submit</button>
			</form>
            </div>
		</div>
	)
}

export default TestUseState