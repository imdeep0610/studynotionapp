import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconBtn from '../../../common/IconBtn';
import { IoIosAddCircleOutline } from "react-icons/io";

const CourseBuilderForm = () => {
    const {register,handleSubmit,setValue,formState:{errors}}=useForm();
    const [editSectionName,setEditSectionName]=useState(null);
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
          <div className='mt-10'>
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
                     className='text-sm text-richblack-300'>
                        Cancel Edit
                    </button>
                )
             }
          </div>
       </form>
    </div>
  )
}

export default CourseBuilderForm
