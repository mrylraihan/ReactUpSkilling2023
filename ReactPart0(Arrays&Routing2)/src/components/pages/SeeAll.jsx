import React from 'react'
import { useNavigate } from 'react-router-dom'

function SeeAll({people}) {
  const nav = useNavigate()
  // const goToPage = (idx)=>nav(`/all/${idx}`)you can do either nav without a slash will make it relevant from the path we are on 
  const goToPage = (idx)=>nav(`${idx}`)
  let content = people.map((ele,idx)=><li key={idx} onClick={goToPage.bind(this, idx)}>{ele.name}</li>)
  return (
    <div className='app'>
      <h4>See All</h4>
      <ul>
      {content}
      </ul>
    </div>
  )
}

export default SeeAll