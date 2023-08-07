import React from 'react'

function Test1() {
  return (
    <div className='app'>
          <h1>Test1 with flex</h1>
          <div style={{display:'flex' ,justifyContent:'space-around'}}>
              <p>Paragraph1</p>
              <p>Paragraph2</p>
              <p>Paragraph3</p>
          </div>
    </div>
  )
}

export default Test1