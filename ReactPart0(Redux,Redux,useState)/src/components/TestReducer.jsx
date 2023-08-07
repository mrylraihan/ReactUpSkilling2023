import React, { useReducer } from 'react'
const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}

const nameReducer = (state, action)=>{
    if(action.type=='fn'){
        return {...state,firstName: action.first }
    } else if (action.type == 'ln'){
        return { ...state, lastName: action.last }
    } else if (action.type == 'fl'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}` }
    }else{
        return initial
    }
}
function TestReducer() {
const [name, dispatch] = useReducer(nameReducer, initial)
console.log('useReducer', name);
    const onChangeFirst = e => {
        dispatch({type:'fn', first:e.target.value})
    }
    const onChangeLast = e => {
        dispatch({ type: 'ln', last: e.target.value })
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch({ type: 'fl'})
    }
  return (
    <div className='app'>
          <h1>TestReducer</h1>
            { name.fullName && <h3>{name.fullName}</h3>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    <input type="text" value={name.firstName} onChange={onChangeFirst}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={name.lastName} onChange={onChangeLast}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default TestReducer