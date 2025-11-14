import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const VideoDetailsSidebar = () => {

    const [activeStatus,setActiveStatus]=useState("");
    const [videobarActive,setVideobarActive]=useState("");

    const navigate=useNavigate();
    const {sectionId,subSectionId}=useParams();

    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures
    }=useSelector((state)=>state.viewCourse);

    useEffect(()=>{
        ;(()=>{
           if(!course){

           }
        })()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default VideoDetailsSidebar
