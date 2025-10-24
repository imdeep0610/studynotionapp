import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../services/apiConnector';
import {getUserEnrolledCourses} from '../../../services/operations/profileAPI';

const EnrolledCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [enrolledCourses,setEnrolledCourses]=useState(null);

     const getEnrolledCourses=async()=>{
        try{
           const response=await getUserEnrolledCourses(token);
           setEnrolledCourses(response);
        }
        catch(error){
          console.log("Unable to fetch enrolled courses")
        }
     }

    useEffect(()=>{
         getEnrolledCourses();
    },[])
  return (
    <div>
        <div>Enrolled Courses</div>

    </div>
  )
}

export default EnrolledCourses
