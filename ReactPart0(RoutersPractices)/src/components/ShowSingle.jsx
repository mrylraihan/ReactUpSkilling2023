import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowSingle(props) {
    const [useData, setUserData] = useState(props.data)
    const params = useParams()
    const idx = params.idx
    const nav = useNavigate()
    // const content = useData.find((ele,ind)=>ind==idx)
    const content = useData.map((ele,ind)=>ind==idx?<li key={ind}>{ele}</li>:'')
    // console.log(content);
    // console.log(idx);
  return (
    <div className='app'>
          <h3>ShowSingle</h3>
          {/* <h4>{content}</h4> */}
          {content}
          <button onClick={nav.bind(this, -1)}>go back</button>
    </div>
  )
}

export default ShowSingle