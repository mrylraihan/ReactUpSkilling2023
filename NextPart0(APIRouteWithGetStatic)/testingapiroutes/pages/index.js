import React from 'react'

function index(props) {
  const getData = () =>{
    fetch('/api/hello')
    .then(res=>res.json())
    .then(console.log)
    .catch(console.error)
  }
  const getDataFromBaseApi = () =>{
    fetch('/api')
    .then(res=>res.json())
    .then(console.log)
    .catch(console.error)
  }

  console.log(props)
  return (
    <div>
      <h1>index</h1>
      <button onClick={getData}>Get data</button>
      <button onClick={getDataFromBaseApi}>Get Base Data</button>
    </div>
  )
}

export default index

export async function getStaticProps (){
  // const res = await fetch('./api/hello')
  // const res = await fetch('http://localhost:3000/api/hello');// this would be the way to do it
  // const result = await res.json()
  return{
    props:{
      result:"test"
    }
  }
}