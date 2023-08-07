import React from 'react'
import { useLoaderData } from 'react-router-dom'

function NewEventPageKanye() {
  const quote = useLoaderData()
  console.log(quote)
  return (
    <>
    <h1>NewEventPage</h1>
    <h1>{quote}</h1>
    </>
  )
}

export default NewEventPageKanye