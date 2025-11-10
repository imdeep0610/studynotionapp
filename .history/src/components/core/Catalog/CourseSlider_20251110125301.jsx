import React from 'react';
import {Swiper,SwiperSlider} from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode,Pagination} from 'swiper';
import CourseCard from './CourseCard';

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
