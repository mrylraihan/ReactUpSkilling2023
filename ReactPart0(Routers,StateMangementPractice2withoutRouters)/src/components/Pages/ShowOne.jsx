import React from 'react'

function ShowOne({person, setPerson}) {
  return (
    <div className='app'>
      <h3>ShowOne</h3>
      {person && <h4>{person}</h4>}
      <button onClick={setPerson.bind(this, '')}>reset</button>
    </div>
  )
}

export default ShowOne