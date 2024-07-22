import React, { useState } from 'react'

interface Name {
	firstName: string
}

const TestForm: React.FC = () => {
	const [name, setName] = useState<Name>({ firstName: '' })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName({ ...name, firstName: e.target.value })
	}
console.log(name)
	return (
		<div>
			<label>
				First Name:
				<input
					type='text'
					value={name.firstName}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setName({ ...name, firstName: e.target.value })
					}}
				/>
			</label>
		</div>
	)
}

export default TestForm
