import React from 'react'
import FirstTest from './components/passingProps/FirstTest'
import SecondTest from './components/passingProps/SecondTest'
import ThirdTest from './components/passingProps/ThirdTest'
import FourthTest from './components/passingProps/FourthTest'
import FifthTest from './components/passingProps/FifthTest'
import SixthTest from './components/passingProps/SixthTest'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
	const todoList = [
		new Todo('Learn React'),
		new Todo('Learn TypeScript'),
	]
  return (
		<>
			<div className='App'>
				<h1>App</h1>
			</div>
			<FirstTest name={'wallie'} />
			<SecondTest name={'wallie'} age={32} />
			<ThirdTest name={'wallie'} age={32} />
			<FourthTest arr={['wallie', 32]} />
			<FifthTest />
			<FifthTest name={'wallie'} />
			<SixthTest />
			<Todos items={todoList}>test</Todos>
			<Todos items={todoList} />
		</>
	)
}

export default App