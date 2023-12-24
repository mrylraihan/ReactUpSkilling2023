import React, { useState } from 'react';
import SearchPage from './components/SearchPage.jsx'
import './App.css';
import ShowPage from './components/ShowPage.jsx';

const DUMMY_ARR = ['Wallie', 'Wallie', 'Heshow', 'Meshia']
function App() {
const [peopleList, setPeopleList] = useState(DUMMY_ARR)
const [search , setSearch] = useState('')
console.log(search);
  return (
    <>
    <div className="app">
      <h1>Testing Search</h1>
    </div>
    <SearchPage setSearch={setSearch}/>
    <ShowPage search={search} peopleList={peopleList}/>
    </>
  );
}

export default App;
