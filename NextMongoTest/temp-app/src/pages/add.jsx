import { useRouter } from 'next/router'
import React, { useRef } from 'react'

function add() {
const gundamRef = useRef()
const router = useRouter()
const submitHandler = e =>{
    fetch('./api/addData', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ gundam: gundamRef.current.value }),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.then(() => gundamRef.current.value = '')
            .catch(console.error)
}
  return (
    <div className='app'>
      <h1>Add</h1>
      <div>
        <label>Gundam:
            <input type="text" ref={gundamRef}/>
        </label>
        <button onClick={submitHandler}>submit</button>
      </div>
      <button onClick={router.back}>back</button>
    </div>
  )
}

export default add
