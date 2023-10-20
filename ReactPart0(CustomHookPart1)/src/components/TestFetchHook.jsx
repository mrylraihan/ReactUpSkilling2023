import React from 'react'
import useFetch from '../hooks/use-fetch'

function TestFetchHook() {
    const result = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  return (
    <div className='app'>
        {result.title && <div>
        <h3>{result.title}</h3>
        <p>{result.body}</p>
        </div>}
    </div>
  )
}

export default TestFetchHook