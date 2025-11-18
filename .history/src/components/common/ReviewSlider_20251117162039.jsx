import React, { useEffect, useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode,Pagination,Autoplay,Navigation} from 'swiper/modules';
import ReactStar from 'react-rating-stars-component';
import { apiConnector } from '../../services/apiConnector';
import {ratingEndpoints} from '../../services/api';

const ReviewSlider = () => {

    const [reviews,setReviews]=useState([]);
    const truncateWords=15;


    useEffect(()=>{
          const fetchAllReviews=async()=>{
             const {data}=await apiConnector("GET",ratingEndpoints.REVIEWS_DETAILS_API);
             console.log("LOGGING RESPONSE IN RATING ",data);
        
             if(data?.success){
                setReviews(data?.data);
             }
             console.log("PRINTING REVIEWS......",reviews)
          }
          fetchAllReviews();
    },[])

  return (
    <div className='text-richblack-5'>
       <div className='h-[190px] max-w-maxContent'>
         <Swiper
         slidesPerView={4}
         spaceBetween={24}
         loop={true}
         freeMode={true}
         autoplay={{
            delay:2500,
         }}
         modules={[FreeMode,Pagination,Autoplay]}>
             {
                reviews.map((review,index)=>(
                   <SwiperSlide key={index}>
                       <img src={
                         review?.user?.image ? review?.user?.image :
                         {``}
                       }/>
                   </SwiperSlide>
                ))
             }
         </Swiper>
       </div>
    </div>
  )
}

export default ReviewSlider
