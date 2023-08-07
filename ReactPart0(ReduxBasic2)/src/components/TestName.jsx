import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TestName() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state)
    return (
        <div>
            {state.fullname && <h3>{state.fullname}</h3>}
            <h1>TestName</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(state.firstName){
                    dispatch({ type: 'fl' })
                }else{
                    dispatch({type:'reset'})
                }

                }}>
                <div>
                    <label>First Name:
                        <input type="text" value={state.firstName} onChange={(e)=>dispatch({type:'fn',firstName:e.target.value})} />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input type="text" value={state.lastName} onChange={(e) => dispatch({ type: 'ln', lastName: e.target.value })} />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TestName