import React from 'react'
import { useData } from '../context/dataContext'

function DisplayAll() {
    const dataContext = useData()
    console.log(dataContext)
  return (
    <div>DisplayAll</div>
  )
}

export default DisplayAll