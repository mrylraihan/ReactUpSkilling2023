import React from 'react'
import Person from '../models/person'
import People from './People'

const PeopleList:React.FC<{people:Person[]}>=({people})=> {
    console.log(people)
  return (
		<div>
			<h1>PeopleList</h1>
            <ul>
                {people.map((person:Person)=><People person={person} key={person.name}/>)}
            </ul>
		</div>
	)
}

export default PeopleList

// const PeopleList=(props:{people:Person[]})=> {
//   return (
//     <div>PeopleList</div>
//   )
// }

// export default PeopleList