import React from 'react'
import { useReducer } from 'react'
const initial = {
    firstName:'',
    lastName:'',
    fullName:''
}
const nameReducer = (state, action)=>{
    if(action.type == 'first'){
        return {...state, firstName: action.first}
    } else if (action.type == 'last') {
        return { ...state, lastName: action.last }
    }else if (action.type == 'full'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:'' }
    }
}
function ReducerPractice() {
    const [name, dispatch] = useReducer(nameReducer, initial) 

    const getFirstName = e =>{
        dispatch({type:'first', first:e.target.value})
    }
    const getLastName = e =>{
        dispatch({ type: 'last', last: e.target.value })
    }
    const submitHandler = e =>{
        e.preventDefault()
        dispatch({ type: 'full' })
    }
  return (
    <div className='app'>
        <h3>{name.fullName}</h3>
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
            <button type='submit'>Get name</button>
        </form>
    </div>
  )
}

export default ReducerPractice