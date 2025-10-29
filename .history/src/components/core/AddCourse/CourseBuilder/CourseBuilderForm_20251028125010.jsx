import React from 'react';
import { useForm } from 'react-hook-form';
import IconBtn from '../../../common/IconBtn';

const CourseBuilderForm = () => {
    const {register,handleSubmit,setValue,formState:{errors}}=useForm();
    const [editSectionName,setEditSectionName]=useState();
  return (
    <div className='text-richblack-5'>
       <p>Course Builder</p>
       <form>
          <div>
             <label htmlFor='sectionName'>Section Name<sup className='text-pink-400'>*</sup></label>
             <input
             id='sectionName'
             placeholder='Add section name'
             {...register("sectionName",{required:true})}
             className='w-full'/>
             {errors.sectionName && (<span>Section name is required</span>)}
          </div>
          <div>
             <IconBtn
             type="Submit"
             text=""/>
          </div>
       </form>
    </div>
  )
}

export default CourseBuilderForm
