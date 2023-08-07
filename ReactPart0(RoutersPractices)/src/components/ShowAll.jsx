import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ShowAll(props) {
    const [useData, setUserData] = useState(props.data)
    const nav = useNavigate()
    const content = useData.map((ele, idx)=><li key={idx} onClick={nav.bind(this, `${idx}`)}>{ele}</li>)
    console.log(useData);
  return (
    <div className='app'>
          <h1>ShowAll</h1>
          <ul>
            {content}
          </ul>
    </div>
  )
}

export default ShowAll