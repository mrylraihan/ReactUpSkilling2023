import React, { useEffect, useState } from 'react'
import Person from './models/Person'
import Add from './components/Add'
import ShowAll from './components/ShowAll'

const App = () => {
  const [people, setPeople] = useState<Person[]>([])
  useEffect(()=>{
    setPeople([new Person('Wallie', 32, 1), new Person('Heshow', 32, 2)])
  },[])

  const addPeopleHandler = (name:string, age:number) =>{
    const newPerson = new Person(name, age, people.length+1)
    setPeople(prev=>{
      return [ ...prev, newPerson ]
    })
  }

  const removePeopleHandler = (id:number)=>{
     setPeople((prev) => {
				return prev.filter((ele:Person)=>ele.id!==id)
			})
  }
  console.log(people)
  return (
		<>
			<div>
				<h1>Testing passing props with typescript</h1>
			</div>
			<Add people={people} addPeopleHandler={addPeopleHandler} />
			<ShowAll people={people} removePeopleHandler={removePeopleHandler} />
		</>
	)
}

export default App