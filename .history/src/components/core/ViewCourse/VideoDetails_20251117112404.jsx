import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const VideoDetails = () => {

  const playerRef=useRef();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {courseId,sectionId,subSectionId}=useParams();
  const {}


  const isFirstVideo=()=>{

  }

  const isLastVideo=()=>{

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
