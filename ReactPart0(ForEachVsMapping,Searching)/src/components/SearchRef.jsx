import React, { useRef, useState } from 'react'

function SearchRef(props) {
    const inputIndexRef = useRef()
    const [person, setPerson] = useState('')
   

    const getValue = () => {
        if (inputIndexRef.current.value == ''){
            return 
        }
        console.log(inputIndexRef.current.value)
        setPerson(props.people.find((ele, idx) => idx == inputIndexRef.current.value))
        inputIndexRef.current.value = '';
    }
    // console.log(inputIndex)
    return (
        <div className='app'>
            <h1>Search by Idx with useRef</h1>
            {person && <h4>{person}</h4>}
            <div>
                <label>
                    what index are you looking for :
                    <input type="number" ref={inputIndexRef} />
                </label>
                <button onClick={getValue}>Find Person</button>
            </div>
        </div>
    )
}

export default SearchRef