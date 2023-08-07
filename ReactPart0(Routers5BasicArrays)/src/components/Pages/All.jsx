import React from 'react'
import {useNavigate} from 'react-router-dom' 
function All() {
    const nav = useNavigate()
    const people = [1,2,3]
  return (
    <div className='app'>
        <h1>All</h1>
        {people.map((ele,idx)=>{
            return <p onClick={nav.bind(this,`${ele}`)}>num: {ele}</p>
        })}
    </div>
  )
}

export default All