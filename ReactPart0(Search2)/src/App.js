import { useState } from 'react'
import './App.css';
import Search from './components/Search';
import ShowAll from './components/ShowAll';

function App() {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <>
   <Search setSearch={setSearch} search={search}/>
   <ShowAll search={search}/>
    </>
  );
}

export default App;
