import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function FirstComp() {
    const toggle = useSelector(state=>state.toggle)
    const dispatch = useDispatch()
    
    console.log(toggle)

    const toggleHandler = ()=>dispatch({type:"TG"})
  return (
    <>
    {toggle && <h2>FirstComp</h2>}
    <button onClick={toggleHandler}>toggle Header</button>
    </>
  )
}

export default FirstComp