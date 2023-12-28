import { useRouter } from 'next/router'
import React from 'react'

function index() {
  // const router = useRouter()
  // const goToAll = () => router.push('all')
  // const goToAdd = () => router.push('add')
  const deleteAll = async() => {
    let result = await fetch('./api/chore/delete')
    result = await result.json()
    console.log(result)
  }
  return (
    <div className='app'>
      <h1>Home</h1>
      {/* <button onClick={goToAll}>See All Data</button>
      <button onClick={goToAdd}>Add Data</button> */}
      <button onClick={deleteAll}>Delete All Data</button>
    </div>
  )
}

export default index