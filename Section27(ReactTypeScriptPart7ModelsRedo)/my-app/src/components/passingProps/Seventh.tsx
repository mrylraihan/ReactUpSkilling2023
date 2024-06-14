import React from 'react'
import Person from '../../models/person'

const Seventh: React.FC<{
	person1: Person
	person2: Person
	handleClick?: () => void
}> = (props) => {
	console.log(props)
	return <div>Seventh</div>
}

export default Seventh