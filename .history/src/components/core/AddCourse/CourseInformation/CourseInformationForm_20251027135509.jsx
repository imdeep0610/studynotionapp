import React from 'react'
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

  return (
    <div>
      
    </div>
  )
}

export default CourseInformationForm
