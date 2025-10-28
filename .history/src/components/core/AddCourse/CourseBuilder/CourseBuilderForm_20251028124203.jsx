import React from 'react'

const CourseBuilderForm = () => {
    const {register,handleSubmit,setVlaue,formState:{errors}}
  return (
    <div className='text-richblack-5'>
       <p>Course Builder</p>
       <form>
          <div>
             <label>Section Name<sup className='text-pink-400'>*</sup></label>
             <input/>
          </div>
       </form>
    </div>
  )
}

export default CourseBuilderForm
