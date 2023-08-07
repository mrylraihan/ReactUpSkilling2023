import React from 'react'
import { useDispatch } from 'react-redux'
import { nameActions } from '../reduxStore/index'
function TestReduxComp2() {
  const dispatch = useDispatch()
  return (
    <div className='app'>
      <h1>TestReduxComp2</h1>
      <div>
        <label>Name:
          <input type="text" onChange={(e) => dispatch(nameActions.setName(e.target.value))} />
        </label>
      </div>
    </div>
  )
}

export default TestReduxComp2