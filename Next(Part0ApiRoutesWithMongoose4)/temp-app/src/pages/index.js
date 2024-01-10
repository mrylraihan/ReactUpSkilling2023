import React, { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    fetch('./api/users')
    .then(res=>res.json())
    .then(console.log)
  },[])
  return (
    <div className='app'>Home</div>
  )
}

export default Home