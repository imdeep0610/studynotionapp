import React from 'react'

const CourseSlider = ({courses}) => {
  return (
    <>
     {
       courses?.length ? 
       () : 
       (
        <p>No Courses found</p>
       )
     }
    </>
  )
}

export default CourseSlider
