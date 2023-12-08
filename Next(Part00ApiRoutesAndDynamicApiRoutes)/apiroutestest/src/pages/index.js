import React from 'react'

function Home() {
  const fetchData = () =>{
    fetch('./api')
    .then(res=>res.json())
    .then(console.log)
    .catch(console.error)
  }
  const fetchQueryData = () => {
    fetch('./api/jflkjlfkd')
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  }
  return (
    <div className='app'>
      <h1>Home</h1>
      <button onClick={fetchData}>Hit the first api Route</button>
      <button onClick={fetchQueryData}>Hit the query api Route</button>

    </div>
  )
}

export default Home