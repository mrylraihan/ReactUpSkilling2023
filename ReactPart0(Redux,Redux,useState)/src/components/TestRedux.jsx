import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameActions } from '../store/index'
function TestRedux() {
    const nameSlice = useSelector(state=>state.nameSlice)
    const dispatch = useDispatch()
    console.log('redux', nameSlice);
    const onChangeFirst = e => {
        dispatch(nameActions.getFirstName(e.target.value))
    }
    const onChangeLast = e => {
        dispatch(nameActions.getLastName({last: e.target.value }))
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(nameActions.getFullName())
    }

  return (
      <div className='app'>
          <h1>TestRedux</h1>
          {nameSlice.fullName && <h3>{nameSlice.fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label>
                      <input type="text" onChange={onChangeFirst} />
                  </label>
              </div>
              <div>
                  <label>
                      <input type="text" onChange={onChangeLast} />
                  </label>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
  )
}

export default TestRedux