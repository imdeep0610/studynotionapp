import React from 'react'
import Swiper from 'swiper'

const CourseSlider = ({courses}) => {
  return (
    <>
     {
       courses?.length ? 
       (
        <Swiper>

        </Swiper>
       ) : 
       (
        <p>No Courses found</p>
       )
     }
    </>
  )
}

export default CourseSlider
