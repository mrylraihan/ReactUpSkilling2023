import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nameActions } from '@/store'
function HomePage() {
  const name= useSelector(state=>state.nameSlice)
  const dispatch = useDispatch()
  console.log(name)

  const getFirstName = e =>{
    dispatch(nameActions.getFirstName(e.target.value))
  }
  const getLastName = e =>{
    dispatch(nameActions.getLastName(e.target.value))
  }
  const onSubmitHandler = e =>{
    e.preventDefault()
    dispatch (nameActions.getFullName())
  }
  return (
    <div className='app'>
      <h1>HomePage</h1>
      {name.fullName && <h2>{name.fullName}</h2>}
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            firstName:
            <input type='text' value={name.firstName} onChange={getFirstName}/>
          </label>
        </div>
        <div>
          <label>
            lastName:
            <input type='text' value={name.lastName} onChange={getLastName}/>
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default HomePage