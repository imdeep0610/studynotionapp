import React from 'react'
import { useSelector } from 'react-redux'

const NestedView = () => {

    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    
  return (
    <div>
      
    </div>
  )
}

export default NestedView
