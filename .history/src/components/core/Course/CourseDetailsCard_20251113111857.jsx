import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import {toast} from 'react-hot-toast';
import {ACCOUNT_TYPE} from '../../../utils/constatnts';

function CourseDetailsCard({course,setConfirmationalModal,handleBuyCourse}){
    const {
        thumbnail:ThumbnailImage,
        price:CurrentPrice,
    }=course;

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
       if(user && user?.accountType===ACCOUNT_TYPE.INSTRUCTOR){
          toast.error("You are an instructor");
       }
    }

    const handleShare=()=>{
        //window.location.href -> fetch the current url
        copy(window.location.href);
        toast("Link copied to clipboard");
    }

   return(
     <div>
        <img 
        src={ThumbnailImage}
        alt="Thumbnail"
        className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl'/>
        <div>
            Rs. {CurrentPrice}
        </div>
        <div className='flex flex-col gap-y-6'>
            <button
            onClick={
                user && course?.studentsEnroled.includes(user?._id) ? 
                ()=>navigate("/dashboard/enrolled-courses") : 
                handleBuyCourse
            }
            className='bg-yellow-50'>
                
                {
                   user && course?.studentsEnroled.includes(user?._id) ? "Go to Course" : "Buy Now" 
                }
            </button>
            {
                (!course?.studentsEnroled.includes(user?._id)) && (
                    <button
                    onClick={handleAddToCart} className='bg-yellow-50'>
                        Add to Cart
                    </button>
                )
            }
        </div>

        <div>
            <p>
                30-Day Money back guarantee
            </p>
            <p>
                This course includes:
            </p>
            <div className='flex flex-col gap-y-3'>
                {
                    course?.instructions.map((item,index)=>(
                        <p key={index} className='flex gap-2'>
                            <span>{item}</span>
                        </p>
                    ))
                }
            </div>
        </div>
        <div>
            <button
            onClick={handleShare}
            className='mx-auto flex items-center gap-2 p-6 text-yellow-50'>
                Share
            </button>
        </div>
     </div>
   )
}
