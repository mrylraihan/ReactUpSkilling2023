import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function NameReduxComp() {
const state = useSelector(state=>state)
const firstName = useSelector(state=>state.firstName)
const lastName = useSelector(state=>state.lastName)
const fullName = useSelector(state=>state.fullName)
const dispatch = useDispatch()
console.log('redux:',state);

const onSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch({type:'full'})
}
  return (
    <div>
          <h4>NameReduxComp</h4>
            {fullName && <h5>{fullName}</h5>}
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    firstName :
                    <input type="text" value={firstName} onChange={(e)=>dispatch({type:'first', first:e.target.value})}/>
                </label>
            </div>
            <div>
                <label>
                    lastName :
                      <input type="text" value={lastName} onChange={(e) => dispatch({ type: 'last', last: e.target.value })} />
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default NameReduxComp