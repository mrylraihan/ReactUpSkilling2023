import React from 'react'
import { useLoaderData } from 'react-router-dom'

function NewEventPage() {
  const quote = useLoaderData()
  console.log(quote)
  return (
    <h1>NewEventPage</h1>
  )
}

export default NewEventPage