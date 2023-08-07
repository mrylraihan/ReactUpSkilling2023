import React from 'react'
import useFetch from '../hook/use-fetch'

function TestCustomHook() {
    const data = useFetch()

  return (
    <div className='app'>{data.quote}</div>
  )
}

export default TestCustomHook