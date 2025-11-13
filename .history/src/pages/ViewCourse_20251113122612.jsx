import React, { useState } from 'react'
import { FaL } from 'react-icons/fa6';

const ViewCourse = () => {

    const [reviewModal,setReviewModal]=useState(false);

  return (
    <>
       <div>
           <VideoDetailsSidebar setReviewModal={setReviewModal}/>

           <div>
              
           </div>
       </div>
    </>
  )
}

export default ViewCourse
