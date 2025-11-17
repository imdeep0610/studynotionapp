import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const VideoDetails = () => {

  const playerRef=useRef();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();
  const {courseId,sectionId,subSectionId}=useParams();
  const {token}=useSelector((state)=>state.auth);
  const {courseSectionData,courseEntireData,completedLectures}=useSelector((state)=>state.viewCourse);

  const [videoData,setVideoData]=useState([]);
  const [videoEnded,setVideoEnded]=useState(false);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
   const setVideoSpecificDetails=async()=>{
     if(!courseSectionData.length){
        return;
     }
     if(!courseId && !sectionId && !subSectionId){
        navigate("/dashboard/enrolled-courses");
     }

     //lets assume all three fileds is present
     else{
          const filteredData=courseSectionData.filter(
            (course)=>course._id===sectionId
          )

          const filteredVideoData=filteredData?.[0].subSection.filter(
            (data)=>data._id===subSectionId
          )
          setVideoData(filteredVideoData[0]);
          setVideoEnded(false);
     }
   }
   setVideoSpecificDetails();
  },[courseSectionData,courseEntireData,location.pathname])

  const isFirstVideo=()=>{
     const currentSectionIndex=courseSectionData.findIndex((data)=>data._id===sectionId);
     const subSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
      (data)=>data._id===subSectionId
     )

     if(currentSectionIndex===0 && subSectionIndex===0){
         return true;
     }
     else{
      return false;
     }
  }

  const isLastVideo=()=>{
     const currentSectionIndex=courseSectionData.findIndex((data)=>data._id===sectionId);
     const noOfSubSections=courseSectionData[currentSectionIndex].subSection.length
     const subSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
       (data)=>data._id===subSectionId
     )
  }

  const goToNextVideo=()=>{

  }

  const goToPrevVideo=()=>{

  }

  const handleLectureCompletion=()=>{

  }

  return (
    <div>
      
    </div>
  )
}

export default VideoDetails
