import React from 'react'
import useFetch2 from '../hooks/use-fetch2'

function TestApiCustomHook2() {
    const [result, getData] = useFetch2()
    console.log(result)
  return (
    <div>
          <h1>TestApiCustomHook</h1>
            <h3>{result.quote}</h3>
      <button onClick={getData}>fetch call</button>
    </div>
  )
}

export default TestApiCustomHook2