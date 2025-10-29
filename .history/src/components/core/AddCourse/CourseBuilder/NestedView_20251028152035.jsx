import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NestedView = () => {

    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

  return (
    <div>
      
    </div>
  )
}

export default NestedView
