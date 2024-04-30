import React from 'react'
import FirstTest from './components/passingProps/FirstTest'
import SecondTest from './components/passingProps/SecondTest'
import ThirdTest from './components/passingProps/ThirdTest'
import Todos from './components/Todos'
import FourthTest from './components/passingProps/FourthTest'
import FifthTest from './components/passingProps/FifthTest'
import SixthTest from './components/passingProps/SixthTest'

function App() {
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
			<SixthTest/>
			<Todos items={['Learn React', 'Learn TypeScript']}>test</Todos>
			<Todos items={['Learn React', 'Learn TypeScript']} />
		</>
	)
}

export default App