import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const VideoDetailsSidebar = () => {

    const [activeStatus,setActiveStatus]=useState("");
    const [videobarActive,setVideobarActive]=useState("");

    const navigate=useNavigate();
    const {sectionId,subSectionId}=useParams();

    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures
    }

  return (
    <div>
      
    </div>
  )
}

export default VideoDetailsSidebar
