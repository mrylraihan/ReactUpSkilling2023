import React, { useReducer } from 'react'

const initial = {
  firstName:'',
  lastName:'',
  fullName:''
}
const nameReducer = (state, action)=>{
  if(action.type == 'first'){
    return {...state, firstName:action.first}
  } else if (action.type == 'last'){
    return { ...state, lastName: action.last }
  } else if (action.type == 'full'){
    return { ...state, fullName:`${state.firstName} ${state.lastName}`, firstName:'',lastName:'' }
  }else{
    return initial
  }
}
function GetNameReducer() {
    const [name, dispatch] = useReducer(nameReducer, initial)
    console.log(name, 'reducer')
    const firstNameHandler = e =>dispatch({type:'first', first:e.target.value})
    const lastNameHandler = e =>dispatch({type:'last', last:e.target.value})
    const submitHandler = e =>{
      e.preventDefault()
      dispatch({type:'full'})
    }
  return (
    <div>
          <h1>GetNameReducer with basic Redux</h1>
          <h3>{name.fullName}</h3>
      <form onSubmit={submitHandler}>
            <div>
                <label>first-name:
                    <input type="text" value={name.firstName} onChange={firstNameHandler}/>
                </label>
            </div>
            <div>
                <label>last-name:
                    <input type="text" value={name.lastName} onChange={lastNameHandler}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default GetNameReducer