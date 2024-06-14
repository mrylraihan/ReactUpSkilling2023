import React from 'react'
import FirstTest from './components/passingProps/FirstTest'
import SecondTest from './components/passingProps/SecondTest'
import ThirdTest from './components/passingProps/ThirdTest'
import Todos from './components/Todos'
import FourthTest from './components/passingProps/FourthTest'
import FifthTest from './components/passingProps/FifthTest'
import SixthTest from './components/passingProps/SixthTest'
import Todo from './models/todo'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Person from './models/person'
import Seventh from './components/passingProps/Seventh'

function App() {
	const items = [new Todo('Learn React'), new Todo("Learn Typescript")]
	const people = [new Person('wayel', 32), new  Person('heshow', 32)]
  return (
		<Router>
			<div className='App'>
				<h1>App</h1>
				<Navbar />
			</div>

			<SecondTest name={'wallie'} age={32} />
			<ThirdTest name={'wallie'} age={32} />
			<FourthTest arr={['wallie', 32]} />
			<FifthTest />
			<FifthTest name={'wallie'} />
			<SixthTest />
			<Seventh person1={people[0]} person2={people[1]} />
			<Seventh
				person1={people[0]}
				person2={people[1]}
				handleClick={() => console.log('hello')}
			/>
			<Todos items={items}>test</Todos>
			{/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
			<Routes>
				<Route
					path='/'
					element={
						<Seventh
							person1={people[0]}
							person2={people[1]}
							handleClick={() => console.log('hello')}
						/>
					}
				/>
				<Route path='/about' element={<FirstTest name={'wallie'} />} />
			</Routes>
		</Router>
	)
}

export default App