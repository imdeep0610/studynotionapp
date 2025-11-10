import React from 'react';
import {Swiper,SwiperSlider} from 'swiper/react';
import "swiper/css";
import "swiper/css/freeMode";

const CourseSlider = ({courses}) => {
  return (
    <>
     {
       courses?.length ? 
       (
        <Swiper>
          <SwiperSlider>

          </SwiperSlider>
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
