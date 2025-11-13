import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const VideoDetailsSidebar = () => {

    const [activeStatus,setActiveStatus]=useState("");
    const [videobarActive,setVideobarActive]=useState("");

    const navigate=useNavigate();
    const {sectionId,subSectionId}=useSelector

  return (
    <div>
      
    </div>
  )
}

export default VideoDetailsSidebar
