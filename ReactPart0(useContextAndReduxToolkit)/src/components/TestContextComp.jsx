import React, { useContext } from 'react'
import TestContext from '../contextStore/test-context'

function TestContextComp() {
    const ctx = useContext(TestContext)
    console.log(ctx)
  return (
    <div className='app'>
          <h1>TestContextComp</h1>
          <h3>{ctx.name}</h3>
    </div>
  )
}

export default TestContextComp