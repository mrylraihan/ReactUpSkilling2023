import React, { useReducer } from 'react'

const defaultName = { firstName: '', lastName: '', fullName: "" }

const nameReducer = (state, action)=>{
  if(action.type == 'ft'){
    return {...state, firstName: action.first}
  } else if (action.type == 'lt') {
    return { ...state, lastName: action.last }
  } else if (action.type == 'fl') {
    return { ...state,  fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
  }else{
    return defaultName
  }
}
function UseReducerTest() {
  const [name, dispatch] = useReducer(nameReducer, defaultName)

  const getFirstName = e => {
   dispatch({type:'ft', first:e.target.value})
  }
  const getLastName = e => {
    dispatch({ type: 'lt', last: e.target.value })
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch({ type: 'fl' })
  }
  return (
    <div className='app'>
      <h5>useReducer Test</h5>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>firstname:
            <input type="text" value={name.firstName} onChange={getFirstName}/>
          </label>
        </div>
        <div>
          <label>lastname:
            <input type="text" value={name.lastName} onChange={getLastName}/>
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      {name.fullName && <h4>{name.fullName}</h4>}
    </div>
  )
}

export default UseReducerTest