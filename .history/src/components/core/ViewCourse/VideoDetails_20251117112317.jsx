import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';

const VideoDetails = () => {

  const ref=useRef();
  const {courseId,sectionId,subSectionId}=useParams();

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
