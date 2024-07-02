import React from 'react'
import Person from '../models/person'

const People:React.FC<{person:Person}>=(props)=>{
  return (
		<li>
			<div>
				<h4>{props.person.name}</h4>
				<p>{props.person.age}</p>
			</div>
		</li>
	)
}

export default People