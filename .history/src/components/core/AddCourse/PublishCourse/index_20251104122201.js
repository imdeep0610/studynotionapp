import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const PublishCourse = () => {
    const {register,handleSubmit,formState:{errors},setValue,getValue}=useForm();
    const dispatch=useDispatch();
    const {course}=useSelector((state)=>state.course);
  return (
    <div>
      
    </div>
  )
}

export default PublishCourse
