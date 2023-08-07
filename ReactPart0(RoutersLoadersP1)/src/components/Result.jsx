import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Result() {
  const quote = useLoaderData()
  console.log(quote)
  return (
    <div className='app'>Result</div>
  )
}

export default Result

export const getQuote = () => {
    return fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(result=>result.quote)
    .catch(console.error)
}