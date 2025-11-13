import React, { useEffect, useState } from 'react'
import { FaL } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import {setCompletedLectures, setCourseSectioData, setEntireCourseData} from '../slices/viewCourseSlice';

const ViewCourse = () => {

    const [reviewModal,setReviewModal]=useState(false);
    const {courseId}=useParams();
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    useEffect(()=>{
         const setCourseSpecificDetails=async()=>{
            const courseData=await getFullDetailsOfCourse(courseId,token);
            dispatch(setCourseSectioData(courseData.courseDetails.courseContent));
            dispatch(setEntireCourseData(courseData.courseDetails));
            dispatch(setCompletedLectures(courseData.completedVideos));

            let lectures=0;
            courseData?.courseDetails?.courseContent?.forEach((sec)=>{
                lectures+=sec;
            })
         }
    },[])

  return (
    <>
       <div>
           <VideoDetailsSidebar setReviewModal={setReviewModal}/>

           <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
               <div className='w-11/12 mx-auto max-w-[100px] py-10'>
                   <Outlet/>
                </div>
           </div>
       </div>
        {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
    </>
  )
}

export default ViewCourse
