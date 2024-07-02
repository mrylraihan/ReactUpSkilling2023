import React from 'react'

const EighthTest:React.FC<{children?:any}>=(props)=> {
  console.log(props)
  return (
    <div>EighthTest : {props.children}</div>
  )
}

export default EighthTest