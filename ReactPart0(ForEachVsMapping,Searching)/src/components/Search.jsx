import React, { useState } from 'react'

function Search(props) {
    const [inputIndex, setInputIndex] = useState('')
    const [person, setPerson] = useState('')
    const getIndex = e => {
        setInputIndex(e.target.value)
    }

    const getValue = () => {
        if (inputIndex == '') {
            return
        }
        setPerson(props.people.find((ele, idx) => idx == inputIndex))
        setInputIndex('')
    }
    console.log(inputIndex)
    return (
        <div className='app'>
            <h1>Search by Idx</h1>
            {person && <h4>{person}</h4>}
            <div>
                <label>
                    what index are you looking for :
                    <input type="number" value={inputIndex} onChange={getIndex} />
                </label>
                <button onClick={getValue}>Find Person</button>
            </div>
        </div>
    )
}

export default Search