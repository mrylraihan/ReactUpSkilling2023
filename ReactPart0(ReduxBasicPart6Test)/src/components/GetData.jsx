import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function GetData() {
    const nameRef = useRef()
    const dispatch = useDispatch()
    const getName = () =>{
        console.log(nameRef.current.value)
        dispatch({type:'name',name: nameRef.current.value})
        nameRef.current.value = ''
    }
  return (
    <div>
          <h1>GetData</h1>
          <div>
            <label>Whats your Name ?
                <input type="text" ref={nameRef} />
            </label>
            <button onClick={getName}>Submit</button>
          </div>
    </div>
  )
}

export default GetData