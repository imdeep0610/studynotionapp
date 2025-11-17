import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { markLectureAsComplete } from '../../../services/operations/courseDetailsAPI';
import { updateCompletedLectures } from '../../../slices/viewCourseSlice';

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
     const currentSubSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
      (data)=>data._id===subSectionId
     )

     if(currentSectionIndex===0 && currentSubSectionIndex===0){
         return true;
     }
     else{
      return false;
     }
  }

  const isLastVideo=()=>{
     const currentSectionIndex=courseSectionData.findIndex((data)=>data._id===sectionId);
     const noOfSubSections=courseSectionData[currentSectionIndex].subSection.length;
     const currentSubSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
       (data)=>data._id===subSectionId
     )

     if(currentSectionIndex===courseSectionData.length-1 && 
        currentSubSectionIndex===noOfSubSections-1){
           return true;
     }
     else{
      return false;
     }
  }

  const goToNextVideo=()=>{
     const currentSectionIndex=courseSectionData.findIndex((data)=>data._id===sectionId);
     const noOfSubSections=courseSectionData[currentSectionIndex].subSection.length;
     const currentSubSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
       (data)=>data._id===subSectionId
     )

     if(currentSectionIndex!==noOfSubSections-1){
       //means we have to go to next video of same section
       const nextSubSectionId=courseSectionData[currentSectionIndex].
                              subSection[currentSectionIndex+1]._id;
       //this will take us to next video of same section                       
       navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`);
     }
     else{
      //means we have to go to first video of next section
       const nextSectionId=courseSectionData[currentSectionIndex+1]._id;
       const nextSubSectionId=courseSectionData[currentSectionIndex+1].subSection[0]._id;

       //go to first video of next section
       navigate(`/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`);
     }
  }

  const goToPrevVideo=()=>{
     const currentSectionIndex=courseSectionData.findIndex((data)=>data._id===sectionId);
     const noOfSubSections=courseSectionData[currentSectionIndex].subSection.length;
     const currentSubSectionIndex=courseSectionData[currentSectionIndex].subSection.findIndex(
       (data)=>data._id===subSectionId
     )

     if(currentSubSectionIndex!==0){
       //same section , previous video
       const prevSubSectionId=courseSectionData[currentSectionIndex].subSection[currentSubSectionIndex-1];

       //go to prev video
        navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`);
     }
     else{
      //different section , last video
      const prevSectionId=courseSectionData[currentSectionIndex-1]._id;
      const prevSubSectionLength=courseSectionData[currentSectionIndex-1].subSection.length;
      const prevSubSectionId=courseSectionData[currentSectionIndex-1].subSection[prevSubSectionLength]._id; 

      //go to last video of prev section
      navigate(`/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`);
     }
  }

  const handleLectureCompletion=async()=>{
   setLoading(true);
   const res=await markLectureAsComplete({courseId:courseId,subSectionId:subSectionId},token);
   //update the state
   if(res){
     dispatch(updateCompletedLectures(subSectionId));
   }
   setLoading(true);
  }

  return (
    <div> 
       {
        !videoData
       }
    </div>
  )
}

export default VideoDetails
