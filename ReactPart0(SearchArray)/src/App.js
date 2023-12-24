import React, { useState } from 'react'
import './App.css';
function App() {
  const [list, setList] = useState(["The Monkey King", "Saving Private Ryan", "The Big Apple"])
  const [search, setSearch] = useState('')

  const filteredList = list.filter(ele=>ele.toLowerCase().includes(search.toLowerCase()))

  return (
    <div >
      <label htmlFor="">Searching:
      <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
      </label>
      <div className='app'>
        {filteredList.length>0 && filteredList.map(ele=><p>{ele}</p>)}
        {filteredList.length<0 && list.map(ele=><p>{ele}</p>)}
      </div>
    </div>
  )
}

export default App