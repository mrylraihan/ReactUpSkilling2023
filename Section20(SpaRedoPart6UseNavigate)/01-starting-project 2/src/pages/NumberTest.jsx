import React from 'react'
import {useParams} from 'react-router-dom'
function NumberTest() {
    const num = useParams().num
  return (
    <div>NumberTest {num}</div>
  )
}

export default NumberTest