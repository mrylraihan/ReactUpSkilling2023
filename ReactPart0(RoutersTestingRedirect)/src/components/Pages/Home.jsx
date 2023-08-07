import React from 'react'
import { useNavigate } from 'react-router-dom'
// import TestForAlan from './TestForAlan'

function Home({people}) {
    //['Sophie', 'Alan', 'Amber', 'Alejandro', 'Wallie']
    const nav = useNavigate()

    let content = people.map((ele,idx)=><li key={ele.title} onClick={()=>{
        nav(`${idx}`)
    }}>{ele.title}</li>)
  return (
    <>
      <div className='app'>
          <h1>Home</h1>
          <ul>
            {content}
          </ul>
      </div>
          {/* <TestForAlan/> */}
    </>
  )
}

export default Home