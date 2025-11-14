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
           if(!courseSectionData.length){
               return;
             const currentSectionIndex=courseSectionData.findIndex(
                (data)=> data._id === sectionId
            )

            const currentSubSectionIndex=courseSectionData?.[currentSectionIndex]?.subSectionId
           }
        })()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default VideoDetailsSidebar
