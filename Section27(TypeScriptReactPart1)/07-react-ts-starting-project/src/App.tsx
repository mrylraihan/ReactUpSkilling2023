import React from 'react'
import Todos from './components/Todos'
import Todo from './models/todo'
import PeopleList from './components/PeopleList'
import Person from './models/person'

function App() {
  const todoList = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]
  const roster = [
    new Person("Wayel", 32),
    new Person("Hisham", 32),
  ] 
  return (
		<div>
			<Todos items={todoList} />
			<PeopleList people={roster} />
		</div>
	)
}

export default App