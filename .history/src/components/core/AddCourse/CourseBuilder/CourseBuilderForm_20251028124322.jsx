import React from 'react'
import { useForm } from 'react-hook-form'

const CourseBuilderForm = () => {
    const {register,handleSubmit,setValue,formState:{errors}}=useForm();
  return (
    <div className='text-richblack-5'>
       <p>Course Builder</p>
       <form>
          <div>
             <label htmlFor='sectionName'>Section Name<sup className='text-pink-400'>*</sup></label>
             <input
             id='sectionName'
             placeholder='Add a course'
             {...register("sectionName",{required:true})}/>
          </div>
       </form>
    </div>
  )
}

export default CourseBuilderForm
