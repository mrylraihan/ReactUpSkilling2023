import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function TestComp() {
    const name = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(name)

    const getFirstName = e =>{
        dispatch( { type: "first", first:e.target.value })
    }
    const getLastName = e =>{
        dispatch( { type: "last", last:e.target.value })
    }
    const getFullName = e =>{
        e.preventDefault()
        dispatch({type:'full'})
    }
  return (
    <div className='app'>
          <h1>TestComp</h1>
          {name.fullName && <h3>{name.fullName}</h3>}
          <form onSubmit={getFullName}>
            <div>
                <label> firstName:
                    <input type="text" value={name.firstName} onChange={getFirstName}/>
                </label>
            </div>
            <div>
                <label> lastName:
                    <input type="text" value={name.lastName} onChange={getLastName}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default TestComp