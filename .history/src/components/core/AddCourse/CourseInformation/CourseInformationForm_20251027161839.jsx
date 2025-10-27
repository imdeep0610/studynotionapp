import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCourseCategories} from '../../../../services/operations/courseDetailsAPI';

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

        useEffect(()=>{
            const getCategories=async()=>{
                 setLoading(true);
                 const categories=await fetchCourseCategories();
                 if(categories.length>0){
                  setCourseCategories(categories);
                 }
                 setLoading(false);
            }
            if(editCourse){
               setValue("courseTitle",course.courseName);
               setValue("courseShortDesc",course.courseDescription);
               setValue("coursePrice",course.price);
               setValue("courseTags",course.tag);
               setValue("courseBenefits",course.whatYouWillLearn);
               setValue("courseCategory",course.category);
               setValue("courseRequirements",course.instructions);
               setValue("courseImage",course.thumbnail);
            }
            getCategories();
        },[])

        const onSubmit=async(data)=>{

        }

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}
       className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8'>
         <div>
            <label htmlFor='courseTitle'>Course Title<sup className='text-pink-500'>*</sup></label>
            <input 
              type='text'
              id='courseTitle'
              placeholder='Enter your course title'
              {...register("courseTitle",{required:true})}
              className='w-full'
            />
            {errors.courseTitle && (<span>Course Title is required</span>)}
         </div>
         <div>
           <label htmlFor='shortDescription'>Short Description<sup className='text-pink-500'>*</sup></label>
           <textarea
           id='shortDescription'
           placeholder='Enter your description'
           {...register('shortDescription',{required:true})}/>
           {errors.shortDescription && (<span>Description is required</span>)}
         </div>
       </form>
    </div>
  )
}

export default CourseInformationForm
