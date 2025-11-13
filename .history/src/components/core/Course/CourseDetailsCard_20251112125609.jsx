import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CourseDetailsCard({course,setConfirmationalModal,handleBuyCourse}){
    const {
        thumbnail:ThumbnailImage,
        price:CurrentPrice,
    }=course;

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

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
                   user && course?.studentsEnroled.includes() 
                }
            </button>
        </div>
     </div>
   )
}
