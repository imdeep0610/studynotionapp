import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function EditCourse() {

    const dispatch=useDispatch();
    const {courseId}=useParams()
  return (
    <div>
      
    </div>
  )
}
