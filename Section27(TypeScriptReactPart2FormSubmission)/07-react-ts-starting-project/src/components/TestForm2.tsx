import React, { useState } from 'react'

// interface Name {
// 	firstName: string,
// 	lastName: string,
// 	fullName: string
// }

const TestForm2:React.FC=()=>{
    const [name, setName] = useState<{
			firstName: string
			lastName: string
			fullName: string
		}>({
			firstName: '',
			lastName: '',
			fullName: '',
		})
const onSubmitHandler = (e:React.FormEvent)=>{
    e.preventDefault()
    setName({...name, fullName:`${name.firstName} ${name.lastName}`})

}

console.log(name)
  return (
		<div>
			<h1>TestForm2</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						FirstName:
						<input
							type='text'
							value={name.firstName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setName({ ...name, firstName: e.target.value })
							}}
						/>
					</label>
				</div>
				<div>
					<label>
						LastName:
						<input
							type='text'
							value={name.lastName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setName({ ...name, lastName: e.target.value })
							}}
						/>
					</label>
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}

export default TestForm2