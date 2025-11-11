import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import GetAvgRating from '../utils/avgRating';
import "../App.css";
import Error from '../pages/Error';

const CourseDetails = () => {

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const {loading}=useSelector((state)=>state.profile);
    const {paymentLoading}=useSelector((state)=>state.course);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {courseId}=useParams();

    const [courseData,setCourseData]=useState(null);
    const [avgReviewCount,setAvgReviewCount]=useState(0);
    const [totalNoOfLectures,setTotalNoOfLectures]=useState(0);
    const [confirmationalModal,setConfirmationalModal]=useState(null);

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
    },[courseId]);

    useEffect(()=>{
        const count=GetAvgRating(courseData?.data?.CourseDetails.ratingAndReviews);
        setAvgReviewCount(count);
    },[courseData]);

    useEffect(()=>{
        let lectures=0;
        response?.data?.CourseDetails?.courseContent?.forEach((sec)=>{
            lectures+=sec.subSection.length || 0
        })

        setTotalNoOfLectures(lectures);
    },[courseData])

    const handleBuyCourse=()=>{
       if(token){
          buyCourse(token,[courseId],user,navigate,dispatch);
          return;
       }
       setConfirmationalModal(
        text1="You are not logged in",
        text2="Please purchase the course"
        btn1Text:
        btn2Text:""
       )
    }

    if(loading || !courseData){
      return(
        <div className='spinner'></div>
      )
    }

    if(!courseData.success){
       return(
        <div>
            <Error/>
        </div>
       )
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
