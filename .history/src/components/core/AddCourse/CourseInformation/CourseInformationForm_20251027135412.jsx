import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

const CourseInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValue,
        formState:{errors},
        }=useForm();
        
        const dispatch=useDispatch

  return (
    <div>
      
    </div>
  )
}

export default CourseInformationForm
