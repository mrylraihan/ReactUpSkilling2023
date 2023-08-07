import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ThirdComp() {
    const {firstName, lastName, fullName} = useSelector(state=>state)
    const dispatch = useDispatch()
    

    const onSubmitHandler = e =>{
        e.preventDefault()
        dispatch({type:"FN"})
    }
  return (
    <div>
      <h1>ThirdComp</h1>
          {fullName && <h3>{fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>firstName:
                      <input type="text" value={firstName} onChange={e => dispatch({ type: 'FS', firstName :e.target.value})}/>
                </label>
            </div>
            <div>
                <label>lastName:
                      <input type="text" value={lastName} onChange={e => dispatch({ type: 'LS', lastName :e.target.value})}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default ThirdComp