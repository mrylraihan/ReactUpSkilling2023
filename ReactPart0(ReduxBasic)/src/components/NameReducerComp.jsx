import React, { useReducer } from 'react'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}
const reducer = (state, action)=>{
    if (action.type == 'first') {
        return { ...state, firstName: action.first }
    } else if (action.type == 'last') {
        return { ...state, lastName: action.last }
    } else if (action.type == 'full') {
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
    } else {
        return initial
    }
}

function NameReducerComp() {
const [name, dispatch]=  useReducer( reducer, initial)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'full' })
    }
    console.log('reducer:', name);
  return (
      <div>
          <h4>NameReducerComp</h4>
          {name.fullName && <h5>{name.fullName}</h5>}
          <form onSubmit={onSubmitHandler}>
              <div>
                  <label>
                      firstName :
                      <input type="text" value={name.firstName} onChange={(e) => dispatch({ type: 'first', first: e.target.value })} />
                  </label>
              </div>
              <div>
                  <label>
                      lastName :
                      <input type="text" value={name.lastName} onChange={(e) => dispatch({ type: 'last', last: e.target.value })} />
                  </label>
              </div>
              <button type='submit'>submit</button>
          </form>
      </div>
  )
}

export default NameReducerComp