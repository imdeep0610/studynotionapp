import React from 'react'
import { useSelector } from 'react-redux'

const RenderTotalAmount = () => {

    const {total}=useSelector((state)=>state.cart);
  return (
    <div>
       <p>Total : </p>
       <p>Rs {total}</p>
    </div>
  )
}

export default RenderTotalAmount
