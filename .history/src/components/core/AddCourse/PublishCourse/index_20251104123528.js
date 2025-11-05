import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const PublishCourse = () => {
    const {register,handleSubmit,formState:{errors},setValue,getValue}=useForm();
    const dispatch=useDispatch();
    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);

    const onSubmit=()=>{

    }

  return (
    <div className='rounded-md border-[1px] bg-richblack-800 p-6 border-richblack-700'>
       <p>Publish Course</p>
       <form onSubmit={handleSubmit(onSubmit)}>
          <div>
             <label htmlFor='public'>Make this Course as Public</label>
             <input
             type='checkbox'
             id='public'/>
          </div>
       </form>
    </div>
  )
}

export default PublishCourse
