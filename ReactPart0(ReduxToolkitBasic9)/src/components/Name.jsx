import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '../store/nameSlice';

function Name() {
    const name = useSelector(state=>state.nameSlice)
    const dispatch = useDispatch()
    console.log(dispatch)
    console.log(name)
    console.log(nameActions)
  
  const getFirstName = e => dispatch(nameActions.setFirstName(e.target.value))
  
  const getLastName = e => dispatch(nameActions.setLastName(e.target.value))
  
  const submitHandler = e =>{
    e.preventDefault()
    console.log('hi')
    dispatch(nameActions.setFullName())
  }
  return (
    <div className='app'>
      <h1>FullName With redux</h1>
      {name.fullName && <h3>{name.fullName}</h3>}
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName:
            <input type="text" value={name.firstName} onChange={getFirstName}/>
          </label>
        </div>
        <div>
          <label>LastName:
            <input type="text" value={name.lastName} onChange={getLastName}/>
          </label>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Name