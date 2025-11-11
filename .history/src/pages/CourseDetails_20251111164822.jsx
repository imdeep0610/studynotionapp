import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';

const CourseDetails = () => {

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {courseId}=useParams();

    const [courseData,setCourseData]=useState(null);
    const [avgReviewCount,setAvgReviewCount]=useState(0);

    useEffect(()=>{
        const getCourseFullDetails=async()=>{
            try{
           const result=await fetchCourseDetails(courseId);
           setCourseData(result);
        }
        catch(error){
          console.log("Could not able to fetch course details");
        }
        }
        getCourseFullDetails();
    },[courseId])

    useEffect(()=>{
        
    })

    const handleBuyCourse=()=>{
       if(token){
          buyCourse(token,[courseId],user,navigate,dispatch);
          return;
       }
    }

  return (
    <div className='flex items-center'>
       <button className='bg-yellow-50 p-6 mt-10'
       onClick={()=>handleBuyCourse()}>
         Buy Now
       </button>
    </div>
  )
}

export default CourseDetails
