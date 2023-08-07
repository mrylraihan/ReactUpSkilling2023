import React from 'react'
import useFetch from '../hooks/use-fetch'

function TestApiCustomHook() {
    const result = useFetch()
    console.log(result)
  return (
    <div>
          <h1>TestApiCustomHook</h1>
            <h3>{result.quote}</h3>
    </div>
  )
}

export default TestApiCustomHook