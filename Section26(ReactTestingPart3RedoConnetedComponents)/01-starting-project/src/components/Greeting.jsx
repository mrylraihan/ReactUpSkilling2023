import React, { useState } from 'react'

function Greeting() {
  const [isTrue, setIsTrue] = useState(false)
  
  const  changeTextHandler = () => setIsTrue(!isTrue)
  return (
    <div>
      <h2>Hello World!</h2>
      {!isTrue && <h3>Hello World! from H3</h3>}
      {isTrue && <p>It's good to see you!</p>}
      <button onClick={changeTextHandler}>test</button>
    </div>
  )
}

export default Greeting
