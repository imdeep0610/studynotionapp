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
    <div>
       <div>
         <Swiper></>
       </div>
    </div>
  )
}

export default ReviewSlider
