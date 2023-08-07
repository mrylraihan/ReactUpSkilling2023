import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import { useNavigate } from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'

function Home() {
    const nav = useNavigate()

    const navTooOrderSummary = ()=> nav('order-summary')
  return (
    <div className='app'>
        <h1>Home</h1>
        <button onClick={navTooOrderSummary}>Place Order</button>
    </div>
  )
}

export default Home