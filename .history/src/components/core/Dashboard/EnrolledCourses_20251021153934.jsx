import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../services/apiConnector';

const EnrolledCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [enrolledCourses,setEnrolledCourses]=useState(null);

     const getEnrolledCourses=async()=>{
        try{
           const response=await apiConnector();
        }
        catch(error){
          console.log("Unable to fetch enrolled courses")
        }
     }

    useEffect(()=>{
 
    },[])
  return (
    <div>
        <div>Enrolled Courses</div>

    </div>
  )
}

export default EnrolledCourses
