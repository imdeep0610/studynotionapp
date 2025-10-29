import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconBtn from '../../../common/IconBtn';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { IoChevronForwardOutline } from "react-icons/io5";


const CourseBuilderForm = () => {
    const {register,handleSubmit,setValue,formState:{errors}}=useForm();
    const [editSectionName,setEditSectionName]=useState(null);
    const {course}=useSelector((state)=>state.course);

    const cancelEdit=()=>{
        setEditSectionName(null);
        setValue("sectionName","")
    }

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
          <div className='mt-10 flex w-full'>
             <IconBtn
             type="Submit"
             text={editSectionName ? "Edit Section Name" : "Create Section"}
             outline={true}
             customClasses={"text-white"}/>
             <IoIosAddCircleOutline className='text-yellow-50' size={20}/>
             <IconBtn/>
             {
                editSectionName && (
                    <button
                     type='button'
                     onClick={cancelEdit}
                     className='text-sm text-richblack-300 underline ml-10'>
                        Cancel Edit
                    </button>
                )
             }
          </div>
       </form>
       {
        course.courseContent.length>0 && (

        )
       }
       <div className='flex justify-end gap-x-3'>
           <button onClick={goBack}
           className='rounded-md cursor-pointer flex items-center'>
             Back
           </button>
           <IconBtn text="Next"
           onClick={goToNext}/>
           <IoChevronForwardOutline />
           
       </div>
    </div>
  )
}

export default CourseBuilderForm
