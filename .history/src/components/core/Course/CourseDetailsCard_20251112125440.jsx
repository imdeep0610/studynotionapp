import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CourseDetailsCard({course,setConfirmationalModal,handleBuyCourse}){
    const {
        thumbnail:ThumbnailImage,
        price:CurrentPrice,
    }=course;

    const {user}=useSelector((state)=>state.profile);
    const navigate=useNavigate();
   return(
     <div>
        <img 
        src={ThumbnailImage}
        alt="Thumbnail"
        className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl'/>
        <div>
            Rs. {CurrentPrice}
        </div>
        <div>
            <button>
                {
                   courseDa 
                }
            </button>
        </div>
     </div>
   )
}
