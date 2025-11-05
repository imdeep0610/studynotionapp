import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchCourseDetails, fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';

const MyCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [courses,setCourses]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
       const fetchCourse=async()=>{
          const result=await fetchInstructorCourses(token);

          if(result){
             setCourses(result);
          }
       }
       fetchCourse();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default MyCourses
