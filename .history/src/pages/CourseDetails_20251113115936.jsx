import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import GetAvgRating from '../utils/avgRating';
import "../App.css";
import Error from '../pages/Error';
import ConfirmationModal from '../components/common/ConfirmationModal';
import RatingStars from '../components/common/RatingStars';
import { formatDate } from '../services/formatDate';
import { ImEarth } from "react-icons/im";
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';

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
        const count=GetAvgRating(courseData?.data?.courseDetails.ratingAndReviews);
        setAvgReviewCount(count);
    },[courseData]);

    useEffect(()=>{
        let lectures=0;
        courseData?.data?.courseDetails?.courseContent?.forEach((sec)=>{
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
        {
        text1:"You are not logged in",
        text2:"Please login to purchase the course",
        btn1Text:"Login",
        btn2Text:"Cancel",
        btn1Handler:()=>navigate("/login"),
        btn2Hanlder:()=>setConfirmationalModal(null)
        }
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

    const {
        _id:course_id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        instructor,
        courseContent,
        ratingAndReviews,
        createdAt,
        studentsEnrolled
    }=courseData.data?.courseDetails

  return (
    <div className='flex flex-col text-richblack-5'>
        <div className='relative flex flex-col justify-start p-8'>
           <p>{courseName}</p>
        <p>{courseDescription}</p>
        <div className='flex gap-x-3'>
            <span>{avgReviewCount}</span>
            <RatingStars Review_Count={avgReviewCount} Star_Size={24}/>
            <span>{`${ratingAndReviews.length} reviews`}</span>
            <span>{`${studentsEnrolled.length} students enrolled`}</span>
        </div>  

        <div>
           <p>Created By {`${instructor.firstName} ${instructor.lastName}`}</p>
        </div>
        <div className='flex gap-x-3'>
           <p>Created At {formatDate(createdAt)}</p>
           <p>
            <ImEarth />
            {" "} English
           </p>
        </div>
        <div>
           <CourseDetailsCard
             course={courseData?.data?.courseDetails}
             setConfirmationalModal={setConfirmationalModal}
             handleBuyCourse={handleBuyCourse}/>
        </div>
        </div>
        <div>
           <p>What You Will Learn</p>
           <div>{whatYouWillLearn}</div>
           <div>
             <p>Course Content:</p>
           </div>
           <div className='flex gap-x-3 justify-between'>
              <div>
                 <span>{courseContent.length} section(s)</span>
                 <span>{totalNoOfLectures} lectures</span>
                 <span>{courseData?.data?.totalDuration} total length</span>
              </div>   
           </div>
        </div>
        
        {
        confirmationalModal && <ConfirmationModal modalData={confirmationalModal}/>
       }
    </div>
  )
}

export default CourseDetails
