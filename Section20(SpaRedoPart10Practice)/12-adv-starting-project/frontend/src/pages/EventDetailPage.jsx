import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
    const params = useParams()
    const id = params.id
  return (
    <h1>EventDetailPage: {id}</h1>
  )
}

export default EventDetailPage