import React, { useEffect, useRef } from 'react'

function index(props) {
  const noteRef = useRef()
  // useEffect(() => { getAllData()}, [])
  const getAllData = async () => {
    const res = await fetch('./api/getAllData')
    const result = await res.json()
    console.log(result)
  }
  const submitHandler = e => {
    e.preventDefault();
    const inputNote  = noteRef.current.value
    fetch('./api/sendData', {
      method: 'POST',
      body: JSON.stringify({note:inputNote}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json())
      .then(console.log)
      .catch(console.error)
  }
  console.log(props)
  return (
    <div>
      <div className='app'>
        <h1>Testing mongoose in Next js</h1>
        <button onClick={getAllData}>Get all data with mongoose</button>

      </div>
      <div className='app'>
        <form onSubmit={submitHandler}>
          <div>
            <label>Note:
              <input type="text" ref={noteRef} />
            </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default index

export const getStaticProps = async ()=>{
  const response = await fetch('http://localhost:3000/api/oneData');
  const data = await response.json();

  // Return the fetched data as props
  return {
    props: {
      data,
    },
  };
}