import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function EditCourse() {

    const dispatch=useDispatch();
    const {courseId}=useParams();
    const {course}=useSelector((state)=>state.course);
  return (
    <div>
      
    </div>
  )
}
