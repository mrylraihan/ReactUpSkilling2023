import React, { useState } from 'react'

type animal = {
    name:string,
    animalType:string
}

const EighthTest:React.FC<animal>= (props) => {
const [count, setCount] = useState(0)
    console.log(props)
  const handleClick = () :number=>{
    setCount(count+1)
    console.log("first")
    return count
  }
  console.log(count)
    return (
    <div>
        <h1>EighthTest</h1>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default EighthTest