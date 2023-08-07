import React from 'react'

function BigImage({bigImage}) {
  return (
      <div className="wrapper">
          <img id="bigimage" src={bigImage} alt="bigimage" />
    </div>
  )
}

export default BigImage