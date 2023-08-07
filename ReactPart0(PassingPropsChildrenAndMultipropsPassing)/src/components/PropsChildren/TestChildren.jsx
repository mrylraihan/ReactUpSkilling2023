import React from 'react'

function TestChildren(props) {
  return (
    <div>
          <h1>TestChildren</h1>
          <p>{props.children}</p>
    </div>
  )
}

export default TestChildren