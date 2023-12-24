import React, { useState } from 'react'

function Search(props) {
    const [search, setSearch] = useState('')
    const getSearchCriteria = () =>{
        props.setSearchBy(search)
        setSearch('')
    }
  return (
    <div className='app'>
          <h3>Search</h3>
          <div>
            <label>
                Type your search:
                <input type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
                  <button onClick={getSearchCriteria}>Get Search</button>
            </label>
          </div>
    </div>
  )
}

export default Search