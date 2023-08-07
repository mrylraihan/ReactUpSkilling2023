import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions } from '../store/toggle'
function FirstComp() {
    const toggle = useSelector(state => state.toggleState)
    const dispatch = useDispatch()
    console.log(toggle)
    const toggleHandler = () => dispatch(toggleActions.getToggle())
  return (
    <div>
          {toggle.toggle && <h1>FirstComp</h1>}
          <button onClick={toggleHandler}>Toggle Header</button>
    </div>
  )
}

export default FirstComp