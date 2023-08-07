import React, { useContext } from 'react'
import TestContext from '../contextStore/test-context'

function TestContextComp2() {
  const ctx = useContext(TestContext)
  return (
    <div className='app'>
      <h1>TestContextComp2</h1>
      <div>
        <label>Name:
          <input type="text" onChange={(e)=>ctx.setName(e.target.value)}/>
        </label>
      </div>
    </div>
  )
}

export default TestContextComp2