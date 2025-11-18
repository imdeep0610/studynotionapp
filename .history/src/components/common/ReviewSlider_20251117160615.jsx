import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode,Pagination,Autoplay,Navigation} from 'swiper/modules';
import ReactStar from 'react-rating-stars-component';

const ReviewSlider = () => {

    const [reviews,setReviews]=useState([]);
    const truncateWords=15;

    useEffect(()=>{
          const fetchAllReviews=async()=>{

          }
          fetchAllReviews();
    },[])

  return (
    <div>
      
    </div>
  )
}

export default ReviewSlider
