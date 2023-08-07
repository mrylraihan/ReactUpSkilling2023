import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../store/FullNameSlice'
import { toggleActions } from '../store/ToggleSlice'
function FullName() {
const state = useSelector(state=>state)
const nameState = useSelector(state=>state.name)
const toggle = useSelector(state=>state.toggle.toggle)
const dispatch = useDispatch()
console.log(toggle)
console.log(state)
console.log(nameState)

    const getFirstName = e =>{
        dispatch(nameActions.getFirst(e.target.value))
    }
    const getLastName = e =>{
        dispatch(nameActions.getLast(e.target.value))
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        dispatch(nameActions.getFull())
    }

  return (
    <div className='app'>
        {nameState.fullName && <p>{nameState.fullName}</p>}
       {toggle && <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name:
                    <input type="text" value={nameState.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>Last Name:
                      <input type="text" value={nameState.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>}
        <button onClick={()=>dispatch(toggleActions.getToggle())}>toggle</button>
    </div>
  )
}

export default FullName