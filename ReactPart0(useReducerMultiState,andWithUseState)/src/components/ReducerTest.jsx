import React, { useReducer } from 'react'

const initial = {
    firstName:'',
    lastName:'',
    fullName:'',
    showData: true
}
const reducer = (state, action)=>{
    if(action.type =='fn'){
        return {...state, firstName: action.fn}
    } else if (action.type == 'ln'){
        return { ...state, lastName: action.ln }
    }else if(action.type == 'fl'){
        return { ...state, fullName: `${state.firstName} ${state.lastName}` }
    }else if(action.type == 'show'){
        return {...state, showData:!state.showData}
    }else{
        return initial
    }
}
function ReducerTest() {
    const [refObj, dispatch] = useReducer(reducer, initial)

    const getFirstName = (e)=>{
        dispatch({type:'fn',fn: e.target.value})
        console.log(refObj.firstName);
    }

    const getLastName = (e)=>{
        dispatch({type:'ln',ln: e.target.value})
        console.log(refObj.lastName);
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch({type:'fl'})
        dispatch({type:'fn',fn:''})
        dispatch({type:'ln',ln:''})
    }

    const toggleForm = ()=>{
        dispatch({type:'show'})
    }

  return (
    <div className='app'>
          <h1>ReducerTest</h1>
          {refObj.fullName && <h4>{refObj.fullName}</h4>}
          {refObj.showData && <form onSubmit={submitHandler}>
            <div>
            <label>First Name :
                <input type="text" value={refObj.firstName} onChange={getFirstName} />
            </label>
            </div>
            <div>
            <label>Last Name :
                <input type="text" value={refObj.lastName} onChange={getLastName}/>
            </label>
            </div>
            <button type='submit'>Submit</button>
          </form>}
          <button onClick={toggleForm}>Show Form or Hide Form</button>
    </div>
  )
}

export default ReducerTest