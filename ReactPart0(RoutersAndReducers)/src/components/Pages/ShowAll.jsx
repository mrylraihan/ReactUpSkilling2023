import React from 'react'
import {useNavigate} from 'react-router-dom'
function ShowAll(props) {
  const nav = useNavigate()
  let content =  props.post.map(ele => {
    return <div className='app' key={ele.id}>
      <h3>{ele.title}</h3>
      <button onClick={nav.bind(this, `${ele.id}`)}>More info</button>
    </div>
  })
  return (
   <div>
      {props.post.length > 0 && content}
   </div>
  )
}

export default ShowAll