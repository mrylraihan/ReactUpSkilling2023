import React from 'react'
import { useReducer } from 'react'


const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}
const reducer = (state, action)=>{
    if(action.type == 'first'){
        return {...state, firstName: action.first}
    }else if(action.type == 'last'){
        return {...state, lastName: action.last}
    }else if(action.type == 'full'){
        return {...state, fullName:`${state.firstName} ${state.lastName}`, firstName:'', lastName:''}
    }else{
        return initial
    }
}
function UseReducerForm() {
    const [name, dispatch] = useReducer(reducer, initial)
    console.log(name)
    const getFirstName = e =>{
        dispatch({type:'first', first:e.target.value})
    }
    const getLastName = e =>{
        dispatch({type:'last', last:e.target.value})
    }
    const getFullName = e =>{
        e.preventDefault()
        dispatch({type:'full'})
    }

  return (
      <div className='app'>
          <h1>UseReducer Form</h1>
          {name.fullName && <h3>{name.fullName}</h3>}
          <form onSubmit={getFullName}>
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
              <button type='submit'>Submit</button>
          </form>
          <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      </div>
  )
}

export default UseReducerForm