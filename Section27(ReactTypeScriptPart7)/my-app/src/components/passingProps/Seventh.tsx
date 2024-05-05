import React from 'react'
import Person from '../../models/person'

const Seventh:React.FC<Person>= (props)=>{
    console.log(props)
  return (
    <div>Seventh</div>
  )
}

export default Seventh