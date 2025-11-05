import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCourseDetails, fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconBtn from '../../common/IconBtn';
import { FaPlus } from "react-icons/fa6";

const MyCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [courses,setCourses]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
       const fetchCourses=async()=>{
          const result=await fetchInstructorCourses(token);

          if(result){
             setCourses(result);
          }
       }
       fetchCourses();
    },[])
  return (
    <div>
       <div>
         <h1>My Courses</h1>
         <IconBtn
         text="Add Course"
         onclick={()=>navigate("/dashboard/add-course")}
         />
         <FaPlus />
       </div>
    </div>
  )
}

export default MyCourses
