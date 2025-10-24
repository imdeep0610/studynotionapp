import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const EnrolledCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [enrolledCourses,setEnrolledCourses]=useState(null);

    useEffect(()=>{

    },[])
  return (
    <div>
        <div>Enrolled Courses</div>

    </div>
  )
}

export default EnrolledCourses
