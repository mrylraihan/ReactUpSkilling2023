import React, { useEffect, useState } from 'react'

function ShowAll(props) {
    const [list, setList] = useState([])
    useEffect(()=>{
        setList(props.data)
    },[props.data])
    
    // let content = props.data.map((ele,idx)=><li key={idx}>{ele}</li>)
    let content = list.map((ele,idx)=><li key={idx}>{ele}</li>)
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