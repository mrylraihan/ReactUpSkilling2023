import React from 'react'

function Level2(props) {
    console.log(props)
  return (
    <div>
          <h1>Level2</h1>
          {Object.values(props).map(ele=><p key={ele}>{ele}</p>)}
    </div>
  )
}

export default Level2