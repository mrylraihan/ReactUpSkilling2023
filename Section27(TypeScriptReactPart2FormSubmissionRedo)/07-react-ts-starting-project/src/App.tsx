import React, { useState } from 'react'
import Todos from './components/Todos'
import Todo from './models/todo'
import PeopleList from './components/PeopleList'
import Person from './models/person'
import NewTodo from './components/NewTodo'
import NewPeople from './components/NewPeople'


const list = [new Todo('Learn React'), new Todo('Learn TypeScript')]
const roster = [new Person('Wayel', 32), new Person('Hisham', 32)]

function App() {
	const [todoList, setTodoList] = useState<Todo[]>(list)
	const [people, setPeople] = useState<Person[]>(roster)

	const addTodo = (todo:string)=>{
		setTodoList((prev) => prev.concat(new Todo(todo)))
	}
	const addPeople = (name:string, age:number)=>{
		setPeople((prev) => prev.concat(new Person(name, age)))
	}
	const deleteTodo = (id:string)=>{
		setTodoList((prev) => prev.filter((todo:Todo) => todo.id !== id))
		}
	const deletePerson = (name:string)=>{
		setPeople(prev=>{
			return prev.filter((ele:Person)=>ele.name!==name)
		})
	}
	return (
		<div>
			<Todos items={todoList} onRemoveTodo={deleteTodo} />
			<NewTodo addTodo={addTodo} />
			<PeopleList people={people} onDeletePerson={deletePerson} />
			<NewPeople people={people} addPeople={addPeople} />
		</div>
	)
}

export default App
