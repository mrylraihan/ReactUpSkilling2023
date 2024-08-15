import React, { useContext } from 'react'
import {TestContext} from "../store/test-context"
function Test() {
    const ctx = useContext(TestContext)
    console.log(ctx)
  return (
    <div className='app'>Test</div>
  )
}

export default Test