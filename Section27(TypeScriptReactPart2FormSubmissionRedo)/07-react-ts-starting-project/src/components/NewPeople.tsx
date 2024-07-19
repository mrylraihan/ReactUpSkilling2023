import React, { useState } from 'react'
import Person from '../models/person'

const NewPeople: React.FC<{
	people: Person[], addPeople
:(name:string, age:number)=>void}> = (props) => {
	const [data, setData] = useState<{ name: string; age: number }>({
		name: '',
		age: 0,
	})
    const nameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
        console.log(e.target.value)
        setData(prev=>{
            return {...prev, name:e.target.value}
        })
    }
    const ageChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
        console.log(e.target.value)
         setData((prev) => {
						return { ...prev, age: +e.target.value }
					})
    }
	const onsubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
        props.addPeople(data.name, data.age)
	}

	console.log(props)
	return (
		<div>
			<h2>New People</h2>
			<form onSubmit={onsubmitHandler}>
				<label>Name:</label>
				<input type='text' value={data.name} onChange={nameChangeHandler} />
				<label>Age:</label>
				<input type='number' value={data.age} onChange={ageChangeHandler} />
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	)
}

export default NewPeople
