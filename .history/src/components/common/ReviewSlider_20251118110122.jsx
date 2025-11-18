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
                         review?.user?.image ? 
                         review?.user?.image :
                         `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                       }
                       alt="ProfilePic"
                       className='h-9 w-9 object-cover'/>
                       <p>{review?.course?.courseName}</p>
                       <p>{review?.user?.firstName} {review?.user?.lastName}</p>
                       <p>{review?.review.split(" ").splice(0,15).join(" ")}</p>
                       <p>{review?.rating.toFixed(1)}</p>
                       <ReactStar
                       count={5}
                       value={review?.rating}/>
                   </SwiperSlide>
                ))
             }
         </Swiper>
       </div>
    </div>
  )
}

export default ReviewSlider
