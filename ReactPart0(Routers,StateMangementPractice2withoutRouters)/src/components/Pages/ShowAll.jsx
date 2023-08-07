import React from 'react'

function ShowAll({people, setPerson}) {

  return (
    <div className='app'>
      <h1>ShowAll</h1>
      <ul>
        {people.map((ele,idx)=><li key={idx} onClick={setPerson.bind(this,ele)}>{ele}</li>)}
      </ul>
    </div>
  )
}

export default ShowAll