import React from 'react'
import Level3 from './Level3'

function Level2(props) {
  return (
    <div>
          <h1>Level2</h1>
          <Level3 {...props}/>
    </div>
  )
}

export default Level2