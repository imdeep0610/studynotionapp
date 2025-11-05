import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CourseTable = ({courses,setCourses}) => {
    const dispatch=useDispatch();
    const {token}=useSelector((state)=>state.auth);
  return (
    <div>
      
    </div>
  )
}

export default CourseTable
