import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleActions } from '../store/toggle'

function TestToggle() {
    const state = useSelector(state=>state.toggleState.toggle)
    const dispatch = useDispatch()
    console.log(state)
    const toggleHandler = ()=>dispatch(toggleActions.getToggle())
  return (
    <div>
          <h1>TestToggle</h1>
          <button onClick={toggleHandler}>Toggle Background</button>
    </div>
  )
}

export default TestToggle