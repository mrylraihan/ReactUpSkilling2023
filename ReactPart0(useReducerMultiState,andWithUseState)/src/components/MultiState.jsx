import React, { useState } from 'react'

const initial = {
    firstName: '',
    lastName: '',
    fullName: '',
    showData: true
}
function MultiState() {
    const [obj, setObj] = useState(initial)

    const getFirstName = (e) => {
        setObj(prev=>{
            return {...prev, firstName:e.target.value}
        })
        console.log(obj.firstName);
    }

    const getLastName = (e) => {
        setObj(prev => {
            return { ...prev, lastName: e.target.value }
        })
        console.log(obj.lastName);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setObj(prev => {
            return { ...prev, fullName: `${prev.firstName} ${prev.lastName}` }
        })
        console.log(obj.fullName);
    }

    const toggleForm = () => {
        setObj(prev => {
            return { ...prev, showData: !prev.showData }
        })
        console.log(obj.showData);
    }

    return (
        <div className='app'>
            <h1>Multi State Test</h1>
            {obj.fullName && <h4>{obj.fullName}</h4>}
            {obj.showData && <form onSubmit={submitHandler}>
                <div>
                    <label>First Name :
                        <input type="text" value={obj.firstName} onChange={getFirstName} />
                    </label>
                </div>
                <div>
                    <label>Last Name :
                        <input type="text" value={obj.lastName} onChange={getLastName} />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>}
            <button onClick={toggleForm}>Show Form or Hide Form</button>
        </div>
    )
}

export default MultiState