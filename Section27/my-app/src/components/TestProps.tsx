import React from 'react'

const TestProps:React.FC<{name:string, setName:(text:string)=>void}>=(props)=> {
    console.log(props)
  return (
    <div>TestProps</div>
  )
}

export default TestProps