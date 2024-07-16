import React, { useRef, useState } from 'react'
export type Name ={
    firstName:string,
    lastName:string,
    fullName:string,
}

function TestUseRef() {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
	const [name, setName] = useState<Name>({
    firstName:'',
    lastName:'',
    fullName:'',
})
// i would never do this, if i wanted it live i would just use state, if i wanted it only the submission i would only do it on the onsubmitHandler
const firstNameHandler = ()=>{
    setName(prev=>{
        return {...prev, firstName: firstNameRef.current!.value}
    })
}
const lastNameHandler = () => {
	setName((prev) => {
		return { ...prev, lastName: lastNameRef.current!.value }
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
			<h1>TestUseRef Form</h1>
    <p>firstName: {name.firstName}</p>
    <p>lastName: {name.lastName}</p>
			<form onSubmit={submitHandler}>
				<div>
					<label>firstName: 
						<input type='text' ref={firstNameRef} onChange={firstNameHandler} />
					</label>
				</div>
				<div>
					<label>lastName: 
						<input type='text' ref={lastNameRef} onChange={lastNameHandler} />
					</label>
				</div>
                <button type='submit'>submit</button>
			</form>
            </div>
		</div>
	)
}

export default TestUseRef