import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import { useNavigate } from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'

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