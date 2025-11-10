import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode,Pagination,Autoplay} from 'swiper';
import CourseCard from './CourseCard';

const CourseSlider = ({courses}) => {
  return (
    <>
     {
       courses?.length ? 
       (
        <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={200}
        modules={[Pagination]}
        pagination={{dynamicBullets:true}}
        autoplay={{
            delay:2500,
             disableOnInteraction:false
        }}
        className='mySwiper'>
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
