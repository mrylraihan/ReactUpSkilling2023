import React from 'react'
import { useNavigate } from 'react-router-dom'

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