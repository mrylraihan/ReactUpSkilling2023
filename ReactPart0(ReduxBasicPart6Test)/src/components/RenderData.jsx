import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function RenderData() {
    const state = useSelector(state=>state)
    const name = useSelector(state=>state.name)
    const toggle = useSelector(state=>state.toggle)
    const dispatch = useDispatch()
    console.log(state)
    const toggleHeader = () =>{
        dispatch({type:'toggle'})
    }
  return (
    <div>
          <h1>RenderData</h1>
          {toggle && <h3>{name}</h3>}
          <button onClick={toggleHeader}>Hide Data</button>
    </div>
  )
}

export default RenderData