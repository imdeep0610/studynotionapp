import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export default function EditCourse() {

    const dispatch=useDispatch();
    const {courseId}=useParams();
    const {course}=useSelector((state)=>state.course);
    const [loading,setLoading]=useState(false);
    const {token}=useSelector((state)=>state.auth);
  return (
    <div>
      
    </div>
  )
}
