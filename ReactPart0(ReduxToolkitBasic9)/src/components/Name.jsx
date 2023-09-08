import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../store';
function Name() {
    const name = useSelector(state=>state.nameSlice)
    const dispatch = useDispatch()
    console.log(dispatch)
    console.log(name)
    console.log(nameActions)
  return (
    <div>Name</div>
  )
}

export default Name