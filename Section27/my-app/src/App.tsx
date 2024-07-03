import React, { useState } from 'react';
import './App.css';
import AddOne from './components/AddOne';
import ShowAll from './components/ShowAll';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TestProps from './components/TestProps';
function App() {
  const [nameList, setNameList] = useState<string[]>([])
  const [name, setName] = useState<string>('')

  const addName = (text:string)=>{
    setNameList(prev=>prev.concat(text))
  }
console.log(nameList)
  return (
		<>
			<Router>
				<Navbar />
        <TestProps setName={setName} name={name}/>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/add' element={<AddOne addName={addName} />} />
					<Route path='/show' element={<ShowAll list={nameList} />} />
					
				</Routes>
			</Router>
		</>
	)
}

export default App;
