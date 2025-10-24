import React from 'react'
import { useSelector } from 'react-redux'

const EnrolledCourses = () => {

    const {token}=useSelector((state)=>state.auth)
  return (
    <div>
        <div>Enrolled Courses</div>

    </div>
  )
}

export default EnrolledCourses
