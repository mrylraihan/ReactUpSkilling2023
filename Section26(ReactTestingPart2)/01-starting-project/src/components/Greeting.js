import React, { useState } from 'react'

function Greeting() {
  const [changedText, setChangedText] = useState(false)
  const changeTextHandler = ()=> setChangedText(true)
  console.log(changedText)
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting
