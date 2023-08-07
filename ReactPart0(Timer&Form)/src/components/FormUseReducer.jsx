import React, { useReducer } from 'react'

const initial = { name: '', email: '',user:{}}
const reducer = (state, action)=>{
    if(action.type === "N"){
        return {...state, name: action.name}
    }else if(action.type === 'E'){
        return { ...state, email: action.email }
    } else if (action.type === 'U') {
        return { ...state, user: {email:state.email, name:state.name}, email:'',name:''}
    }else{
        return initial
    }
}
function FormUseReducer() {
   const [user, dispatch] = useReducer(reducer, initial)
    const getName = (e) =>{
        dispatch({ type: "N", name: e.target.value })
    }
    const getEmail = (e) =>{
        dispatch({ type: "E", email: e.target.value })
    }
    console.log(user)

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch({type: "U"})
    }
    console.log(user, "user")

  return (
    <div className='app'>
          <h1>FormUseReducer</h1>
          <form onSubmit={submitHandler}>
            <div>
                <label>name:
                    <input type="text" value={user.name} onChange={getName}/>
                </label>
            </div>
            <div>
                <label>email:
                      <input type="text" value={user.email} onChange={getEmail}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
          {user.user.name && <h2>{user.user.name}</h2>}
    </div>
  )
}

export default FormUseReducer