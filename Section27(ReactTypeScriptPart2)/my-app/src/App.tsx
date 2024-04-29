import React from 'react'
import FirstTest from './components/passingProps/FirstTest'
import SecondTest from './components/passingProps/SecondTest'
import ThirdTest from './components/passingProps/ThirdTest'
import Todos from './components/Todos'
import FourthTest from './components/passingProps/FourthTest'

function App() {
  return (
    <>
		<div className='App'>
			<h1>App</h1>
		</div>
    <Todos/>
    <FirstTest name={'wallie'}/>
    <SecondTest name={'wallie'} age={32}/>
    <ThirdTest name={'wallie'} age={32}/>
    <FourthTest arr={["wallie", 32]}/>
    </>
	)
}

export default App