import React, { useState } from 'react'
import { FaL } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

const ViewCourse = () => {

    const [reviewModal,setReviewModal]=useState(false);
    const {courseId}=useParams();
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

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
