import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
import { resetCourseState, setStep } from '../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../utils/constatnts';
import { useNavigation } from 'react-router-dom';

const PublishCourse = () => {
    const {register,handleSubmit,formState:{errors},setValue,getValue}=useForm();
    const dispatch=useDispatch();
    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigation();

    useEffect(()=>{
        if(course?.status===COURSE_STATUS.PUBLISHED){
            setValue("public",true)
        } 
    },[])

    const goToCourses=()=>{
       dispatch(resetCourseState())
       //navigate("/dashboard/my-courses");
    }

    const handleCoursePublish=()=>{
      if(course?.status===COURSE_STATUS.PUBLISHED && getValue("public")===true ||
       course?.status===COURSE_STATUS.DRAFT && getValue("public")===false){
         //it means no form updation happens here and no api call is required
         goToCourses();
         return; 
      }

      //if form is updated
      const formData=new FormData();
      formData.append("courseId",course._id);
      const courseStatus=getValue('public') ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
      formData.append("")
    }

    const onSubmit=()=>{
       handleCoursePublish()
    }

    const goBack=()=>{
       dispatch(setStep(2))
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
          <div className='flex justify-end gap-x-3'>
             <button
             disabled={loading}
             type='button'
             onClick={goBack}
             className='flex items-center rounded-md bg-richblack-300 p-3'>
                 Back
             </button>
             <IconBtn disabled={loading}
             text="Save Changes"/>
          </div>
       </form>
    </div>
  )
}

export default PublishCourse
