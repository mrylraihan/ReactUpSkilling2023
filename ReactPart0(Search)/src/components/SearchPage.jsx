import React, { useState } from 'react'

function SearchPage(props) {
    const [inputSearch, setInputSearch] = useState('')

    const getInput = (e) => {
        setInputSearch(e.target.value)
    }
    const getSearch = () => {
        props.setSearch(inputSearch)
        setInputSearch('')
    }
    console.log(inputSearch)
    return (
        <div className='app'>
            <label>Search By Name:
                <input type="text" value={inputSearch} onChange={getInput} />
            </label>
            <button onClick={getSearch}>Submit</button>
        </div>
    )
}

export default SearchPage