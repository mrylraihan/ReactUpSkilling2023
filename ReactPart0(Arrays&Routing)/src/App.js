import { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AddForm from "./components/AddForm";
import Show from "./components/Show";
import Navbar from "./nav/Navbar";
import Home from "./components/Home";
import ShowSingle from "./components/ShowSingle";
const DUMMY_DATA = [
  { name: 'Wallie', id: 0 },
  { name: 'Heshow', id: 1 },
  { name: 'Wallie', id: 2 },
]
function App() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    setPeople(DUMMY_DATA)
  }, [])

  const addHandler = name => {
    setPeople(prev => [...prev, { name, id: prev.length }])
  }
  const editHandler = (idx, name) => {
    setPeople(prev => {
      prev[idx].name = name
      return [...prev]
    })
  }

  console.log(people)
  return (
    <>
      <div className="app">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/show' element={<Show people={people} addHandler={addHandler} editHandler={editHandler} option={'edit'} />} />
        <Route path='/show/:idx' element={<ShowSingle people={people}  />} />
        <Route path='/add' element={<AddForm addHandler={addHandler} editHandler={editHandler} option={'add'} />} />

      </Routes>
    </>
  );
}

export default App;
