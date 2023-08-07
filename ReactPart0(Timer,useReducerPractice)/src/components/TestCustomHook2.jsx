import React from 'react'
import useFetch2 from '../hook/use-fetch2'

function TestCustomHook2() {
    const [data,getData] = useFetch2()

  return (
    <div className='app'>
      <h4>{data.quote}</h4>
      <button onClick={getData}>get new Quote</button>
    </div>
  )
}

export default TestCustomHook2