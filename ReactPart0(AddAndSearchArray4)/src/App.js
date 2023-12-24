import React, { useState } from 'react';

import './App.css';
import AddList from './components/AddList';
import Search from './components/Search';
import ShowList from './components/ShowList';

const Dummy_List = [
  { name: "The Wayel", body: "a cool guy", id: 0 },
  { name: "The Movie", body: "a cool Movie", id: 1 },
  { name: "The Chair", body: "a cool Chair", id: 2 },
  { name: "The Table", body: "a cool Table", id: 3 },
]
//in this app i wanted to try a search function by filtering the array by search input
function App() {
  //here is where i create state for the list and defaulted the dummy data
  const [list, setList] = useState(Dummy_List)
  // created state for the search input to get from the search component and lift the state back up to pass into the component rendering the list 
  const [searchBy, setSearchBy] = useState('')
  //just to test and see if we are lifting up state properly 
  console.log(searchBy)
  return (
    <>
      <div className="app">
      </div>
      {/* creates and lifts search criteria */}
      <Search setSearchBy={setSearchBy} />
      {/* shows the list */}
      <ShowList list={list} searchBy={searchBy} />
      {/* adds objects to our list */}
      <AddList setList={setList} />
    </>
  );
}

export default App;
