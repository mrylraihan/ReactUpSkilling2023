import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../storeToolKit'

function TestToolKit() {
    const state = useSelector(state => state)
    const name = useSelector(state => state.nameSlice)
    const dispatch = useDispatch()
    console.log(state)
    console.log(name)

    const getFirstName = e => {
        dispatch(nameActions.getFirstName(e.target.value ))
    }
    const getLastName = e => {
        dispatch(nameActions.getLastName(e.target.value))
    }
    const getFullName = e => {
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
    return (
        <div className='app'>
            <h1>TestToolKit</h1>
            {name.fullName && <h3>{name.fullName}</h3>}
            <form onSubmit={getFullName}>
                <div>
                    <label> firstName:
                        <input type="text" value={name.firstName} onChange={getFirstName} />
                    </label>
                </div>
                <div>
                    <label> lastName:
                        <input type="text" value={name.lastName} onChange={getLastName} />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default TestToolKit