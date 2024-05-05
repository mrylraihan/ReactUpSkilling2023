import React from 'react'

type animal = {
    name:string,
    animalType:string
}

const EighthTest:React.FC<animal>= (props) => {
    console.log(props)
  return (
    <div>EighthTest</div>
  )
}

export default EighthTest