import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function GetName() {
    const name = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(name, 'redux')
    const firstNameHandler = e => dispatch({ type: 'first', first: e.target.value })
    const lastNameHandler = e => dispatch({ type: 'last', last: e.target.value })
    const submitHandler = e => {
        e.preventDefault()
        dispatch({ type: 'full' })
    }

  return (
    <div>
          <h1>GetName with basic Redux</h1>
          <h3>{name.fullName}</h3>
          <form onSubmit={submitHandler}>
              <div>
                  <label>first-name:
                      <input type="text" value={name.firstName} onChange={firstNameHandler} />
                  </label>
              </div>
              <div>
                  <label>last-name:
                      <input type="text" value={name.lastName} onChange={lastNameHandler} />
                  </label>
              </div>
              <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default GetName