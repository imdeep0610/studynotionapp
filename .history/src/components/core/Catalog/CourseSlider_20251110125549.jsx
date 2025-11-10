import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
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
        <Swiper
        loop>
          {
            courses.map((course,index)=>(
               <SwiperSlide key={index}>
                  <CourseCard course={course} height={"h-[250px]"}/>
               </SwiperSlide>
            ))
          }
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
