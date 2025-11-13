import React, { useState } from 'react'
import { FaL } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';

const ViewCourse = () => {

    const [reviewModal,setReviewModal]=useState(false);

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
        {reviewModal && }
    </>
  )
}

export default ViewCourse
