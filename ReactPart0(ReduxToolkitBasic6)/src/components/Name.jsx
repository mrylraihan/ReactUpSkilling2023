import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../store/index'

function Name() {
const nameState = useSelector(state => state.nameSlice)
const dispatch = useDispatch()

const getFirstName = (e)=>{
    dispatch(nameActions.getFirstName(e.target.value))
}

const getLastName = (e)=>{
    dispatch(nameActions.getLastName(e.target.value))
}

const submitHandler = e =>{
    e.preventDefault()
    dispatch(nameActions.getFullName())
}

console.log(nameState)

  return (
    <div className='app'>
        <h1>What is your Name ?</h1>
          {nameState.fullName && <h3>full name is {nameState.fullName}</h3>}
        <form onSubmit={submitHandler}>
            <div>
                <label>first:
                      <input type="text" onChange={getFirstName} value={nameState.firstName}/>
                </label>
            </div>
            <div>
                <label>last:
                    <input type="text" onChange={getLastName} value={nameState.lastName}/>
                </label>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Name