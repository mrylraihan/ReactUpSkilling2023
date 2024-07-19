import React, { useState } from 'react'
import Person from '../models/Person'

const Add: React.FC<{ people: Person[]; addPeopleHandler:(name:string, age:number)=>void }> = (props) => {
	const [person, setPerson] = useState<{name:string, age:number}>({name:"", age:0})
    
    const nameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPerson({ ...person, name: e.target.value })
    }
    const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({...person, age: +e.target.value})
    }
    const onSubmitHandler = (e:React.FormEvent)=>{
        e.preventDefault()    
        props.addPeopleHandler(person.name, person.age)
    }
    console.log(props)
    console.log(person)
	return (
		<div>
			<h1>Add a Person</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Name:
						<input
							type='text'
							value={person.name}
							onChange={nameChangeHandler}
						/>
					</label>
				</div>
				<div>
					<label>
						Age:
						<input
							type='text'
							value={person.age}
							onChange={ageChangeHandler}
						/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Add