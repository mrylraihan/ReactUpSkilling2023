import React from 'react'
import {useNavigate} from 'react-router-dom'
function ShowAll({people, setPerson}) {
  const nav = useNavigate()
  
  const goToPage = (ele)=>{
    setPerson(ele)
    nav('/showOne')
  }
  return (
    <div className='app'>
      <h1>ShowAll</h1>
      <ul>
        {people.map((ele, idx) => <li key={idx} onClick={goToPage.bind(this,ele)}>{ele}</li>)}
      </ul>
    </div>
  )
}

export default ShowAll