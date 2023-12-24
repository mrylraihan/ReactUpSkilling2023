import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className='app'>
        <div>
            <label>Search:
                <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
            </label>
        </div>
    </div>
  )
}

export default Search