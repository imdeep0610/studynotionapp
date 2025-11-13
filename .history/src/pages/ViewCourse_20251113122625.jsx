import React, { useState } from 'react'
import { FaL } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';

const ViewCourse = () => {

    const [reviewModal,setReviewModal]=useState(false);

  return (
    <>
       <div>
           <VideoDetailsSidebar setReviewModal={setReviewModal}/>

           <div>
              <Outlet/>
           </div>
       </div>
    </>
  )
}

export default ViewCourse
