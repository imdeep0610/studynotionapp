import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';

const CourseInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValue,
        formState:{errors},
        }=useForm();
        
        const dispatch=useDispatch();
        const {course,editCourse}=useSelector((state)=>state.course);
        const [loading,setLoading]=useState(false);
        const [courseCategories,setCourseCategories]=useState([]);

  return (
    <div>
      
    </div>
  )
}

export default CourseInformationForm
