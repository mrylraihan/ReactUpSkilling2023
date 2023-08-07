import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const nav = useNavigate()
    const goBack = ()=> nav(-1)
  return (
    <div>
        <h1>Order Confirmed</h1>
        <button onClick={goBack}>Go Home</button>
    </div>
  )
}

export default OrderSummary