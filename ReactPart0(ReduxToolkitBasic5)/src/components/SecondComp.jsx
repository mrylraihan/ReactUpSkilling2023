import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../store/name'
function SecondComp() {
    const nameState = useSelector(state=>state.nameState)
    const dispatch = useDispatch()

    const getFirstName = e =>{
       dispatch(nameActions.getFirstName({first:e.target.value}))
    }
    const getLastName = e =>{
       dispatch(nameActions.getLastName({last:e.target.value}))
    }
    const submitHandler = e =>{
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
    console.log(nameState)
  return (
    <div>
        <h1>SecondComp</h1>
          {nameState.fullName  && <h3>{nameState.fullName}</h3>}
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName:
                      <input type="text" onChange={getFirstName} value={nameState.firstName}/>
                </label>
            </div>
            <div>
                <label>LastName:
                      <input type="text" onChange={getLastName} value={nameState.lastName} />
                </label>
            </div>
            <button>submit</button>
        </form>
    </div>
  )
}

export default SecondComp