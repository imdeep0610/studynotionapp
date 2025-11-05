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

    const goBack=()=>{

    }

  return (
    <div className='rounded-md border-[1px] bg-richblack-800 p-6 border-richblack-700 text-richblack-5'>
       <p>Publish Course</p>
       <form onSubmit={handleSubmit(onSubmit)}>
          <div>
             <label htmlFor='public'>
             <input
             type='checkbox'
             id='public'
             {...register("public")}
             className='rounded h-4 w-4'/>
             <span className='ml-3'>Make this Course as Public</span>
             </label>
          </div>
          <div>
             <button
             disabled={loading}
             type='button'
             onClick={goBack}
             className='flex items-center'>
                 Back
             </button>
          </div>
       </form>
    </div>
  )
}

export default PublishCourse
