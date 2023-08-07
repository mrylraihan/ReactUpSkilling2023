import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SecondComp() {
    const nameState = useSelector(state=>{return {firstName:state.firstName,lastName:state.lastName, fullName:state.fullName}})
    const dispatch = useDispatch()
    console.log(nameState)

    const onSubmitHandler = e =>{
        e.preventDefault()
        dispatch({type:"FN"})
    }
  return (
    <div>
          <h1>SecondComp</h1>
          {nameState.fullName && <h3>{nameState.fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>firstName:
                      <input type="text" value={nameState.firstName} onChange={e => dispatch({ type: 'FS', firstName :e.target.value})}/>
                </label>
            </div>
            <div>
                <label>lastName:
                      <input type="text" value={nameState.lastName} onChange={e => dispatch({ type: 'LS', lastName :e.target.value})}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default SecondComp