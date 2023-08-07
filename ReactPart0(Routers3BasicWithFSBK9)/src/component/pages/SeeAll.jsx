import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function SeeAll(props) {
const nav = useNavigate()
  useEffect(() => {
    fetch('http://localhost:4000/note')
      .then(res => res.json())
      .then(props.setList)
      .catch(console.error)
  }, [])

let content = props.list.map(ele => <li key={ele._id} onClick={nav.bind(this, `/all/${ele._id}`)} >{ele.title}</li>) 

  return (
    <div className='app'>
      <h1>SeeAll</h1>
      {content}
    </div>
  )
}

export default SeeAll