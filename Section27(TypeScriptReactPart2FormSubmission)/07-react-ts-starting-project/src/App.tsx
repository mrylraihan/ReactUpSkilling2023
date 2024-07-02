import React, { useState } from 'react'
import Todos from './components/Todos'
import Todo from './models/todo'
import NewTodo from './components/NewTodo'
import TestForm from './components/TestForm'
import TestForm2 from './components/TestForm2'
import TestForm3 from './components/TestForm3'

const todoList = [
  new Todo("Learn React"),
  new Todo("Learn TypeScript"),
]
function App() {
  const [list, setList] = useState<Todo[]>(todoList)

  const addTodoHandler = (text:string)=>{
    setList(prev=>{
      return prev.concat(new Todo(text))})
  }
  return (
		<div>
			<Todos items={list} />
			<NewTodo onAddTodo={addTodoHandler} />
			<TestForm />
			<TestForm2 />
			<TestForm3 />
		</div>
	)
}

export default App