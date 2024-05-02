import React from 'react'

function FourthTest({arr}:{arr:any[]}) {
    console.log(arr)
    const [name, age] = [...arr]
    console.log(name)
    console.log(age)
  return (
    <div>FourthTest</div>
  )
}

export default FourthTest