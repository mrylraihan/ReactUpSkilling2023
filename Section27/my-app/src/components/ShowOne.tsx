import React from 'react'

const ShowOne:React.FC<{text:string}> = (props) => {
  return (
    <li>{props.text}</li>
  )
}

export default ShowOne