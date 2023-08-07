import React from 'react'
import Level2 from './Level2'

function Level1(props) {
  return (
    <div>
          <h1>Level1</h1>
          <Level2 {...props}/>
    </div>
  )
}

export default Level1