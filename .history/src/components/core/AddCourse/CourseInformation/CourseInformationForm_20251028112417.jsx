import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCourseCategories} from '../../../../services/operations/courseDetailsAPI';
import { FaIndianRupeeSign } from "react-icons/fa6";
import ChipInput from './ChipInput';
import RequirementField from './RequirementField';
import IconBtn from '../../../common/IconBtn';

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
        const [step,setStep]=useState(1);

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

        const isFormUpdated=()=>{
          const currentValues=getValue();
        }

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
           {...register('shortDescription',{required:true})}
           className='w-full min-h-[140px]'/>
           {errors.shortDescription && (<span>Description is required</span>)}
         </div>
         <div className='relative'>
            <label htmlFor='coursePrice'>Course Price<sup className='text-pink-500'>*</sup></label>
            <input 
              type='text'
              id='coursePrice'
              placeholder='Enter your course price'
              {...register("courseprice",{required:true,
                valueAsNumber:true
              })}
              className='w-full'
            />
            <FaIndianRupeeSign className='absolute top-1/2 text-richblack-400' />
            {errors.coursePrice && (<span>Course Price is required</span>)}
         </div>
         <div>
            <label htmlFor='courseCategory'>Course Category<sup className='text-pink-400'>*</sup></label>
            <select
            id='courseCategory'
            defaultValue=""
            {...register("courseCategory",{required:true})}>
                <option value="" disabled>Choose a Category</option>
                {
                  !loading && courseCategories.map((category,index)=>(
                    <option key={index} value={category._id}>
                         {category?.name}
                    </option>
                  )) 
                }
            </select>
            {errors.courseCategory && (<span>Course category is required</span>)}
         </div>
         <div>
          {/* Create custom tag*/}
          <ChipInput/>
         </div>
         <div>
           {/*Create a component for uploading and showing preview of media*/}
           {/* <Upload/> */}
         </div>
         {/*Benefits of the course*/}
         <div>
            <label htmlFor='courseBenefits'>Benefits of the Course<sup className='text-pink-400'>*</sup></label>
            <textarea
            id='courseBenefits'
            placeholder='Enter Benefits of the course'
            {...register("courseBenefits",{required:true})}
            className='min-h-[130px] w-full'/>
            {errors.courseBenefits && (<span>Course benefits is required</span>)}
         </div>
         
           <RequirementField
           name="courseRequirements"
           label="Requirements/Instructions"
           register={register}
           errors={errors}
           setValue={setValue}
           getValue={getValue}/>
            
            <div>
              {
                editCourse && (
                   <button
                    onClick={()=>dispatch(setStep(2))}
                    className='flex items-center gap-x-2 bg-richblack-300'>
                     Continue Without Saving
                   </button>
                )
              }
              <IconBtn
              text={!editCourse ? "Next" : "Save Changes"}/>
            </div>
       </form>
    </div>
  )
}

export default CourseInformationForm
