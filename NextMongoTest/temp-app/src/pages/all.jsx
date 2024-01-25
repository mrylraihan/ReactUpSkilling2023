import React from 'react'

function all(props) {
    console.log(props)
  return (
    <div className='app'>
      <h1>all</h1>
    </div>
  )
}

export default all

export async function getStaticProps(){
    let data = await fetch('http://localhost:3000/api/allData')
    data = await data.json()
    return {
        props:{data}
    }
}