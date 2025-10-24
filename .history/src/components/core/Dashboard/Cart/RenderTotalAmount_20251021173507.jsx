import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';

const RenderTotalAmount = () => {

    const {total}=useSelector((state)=>state.cart);
  return (
    <div>
       <p>Total : </p>
       <p>Rs {total}</p>
       <IconBtn/>
    </div>
  )
}

export default RenderTotalAmount
