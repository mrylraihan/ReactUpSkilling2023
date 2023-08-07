import React from 'react'

function Preview2({style}) {
    
    
  return (
    <div className='app'>
      <h3 style={{ color: style.color || 'green', backgroundColor: style.backgroundColor || 'yellow', fontSize: style.fontSize }}>Testing</h3>
    </div>
  )
}

export default Preview2