import React from 'react'
import Person from '../models/Person'

const ShowAll: React.FC<{ people: Person[]; removePeopleHandler:(id:number)=>void}> = (
	props
) => {
	return (
		<div>
			<h1>ShowAll</h1>
			<ul>
				{props.people.map((ele: Person) => {
					return <li key={ele.id}>
                        <h3>{ele.name}</h3>
                        <button onClick={()=>props.removePeopleHandler(ele.id)}>Remove</button>
                    </li>
				})}
			</ul>
		</div>
	)
}

export default ShowAll