import React from 'react'
import useCounter2 from '../hooks/use-counter2'
import Card from './Card'

function Test() {
    const count = useCounter2()
  return (
    <Card>
          <h2>Test</h2>
          <p>{count}</p>
    </Card>
  )
}

export default Test