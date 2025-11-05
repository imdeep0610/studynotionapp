import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MyCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [courses,setCourses]=useState([]);
  return (
    <div>
      
    </div>
  )
}

export default MyCourses
