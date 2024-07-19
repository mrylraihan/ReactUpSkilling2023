import React from 'react'
import Person from '../models/person'

const People: React.FC<{
	person: Person
	onDeletePerson: (name: string) => void
}> = (props) => {
	return (
		<li>
			<div>
				<h4>{props.person.name}</h4>
				<p>{props.person.age}</p>
				<button onClick={props.onDeletePerson.bind(this, props.person.name)}>delete person</button>
			</div>
		</li>
	)
}

export default People