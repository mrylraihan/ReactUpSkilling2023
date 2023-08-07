import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {nameActions} from '../store/index'


function ReduxBasicTest() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state);
    const getFirstName = e =>{
        dispatch(nameActions.getFirstName({fn:e.target.value}))
    }
    const getLastName = e =>{
        dispatch(nameActions.getLastName({ln: e.target.value }))
    }
    const submitHandler = e =>{
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }
  return (
    <div>
          <h1>ReduxBasicTest</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label>
                    First-Name:
                    <input type="text" value={state.firstName}  onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label>
                    Last-Name:
                    <input type="text" value={state.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button>Submit</button>
          </form>
          <h3>{state.fullName}</h3>
    </div>
  )
}

export default ReduxBasicTest