import React from 'react'
import { useNavigate } from 'react-router-dom'

function SeeAll(props) {
const nav = useNavigate()

let content = props.list.map(ele => <li key={ele.id} onClick={nav.bind(this, `/all/${ele.id}`)} >{ele.title}</li>) 

  return (
    <div className='app'>
      <h1>SeeAll</h1>
      {content}
    </div>
  )
}

export default SeeAll