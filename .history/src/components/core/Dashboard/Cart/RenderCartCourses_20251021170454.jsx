import React from 'react'
import { useSelector } from 'react-redux'

const RenderCartCourses = () => {

    const {cart}=useSelector((state)=>state.cart);
  return (
    <div>
       {
        cart.map((course,index)=>(
            
        ))
       }
    </div>
  )
}

export default RenderCartCourses
