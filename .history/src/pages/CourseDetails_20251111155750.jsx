import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CourseDetails = () => {

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);

    const dispatch=useDispatch();


    const handleBuyCourse=()=>{
       if(token){
          buyCourse(token,[courseId],user,navigate,dispatch);
          return;
       }
    }

  return (
    <div className='flex items-center'>
       <button className='bg-yellow-50 p-6 mt-10'
       onClick={()=>handleBuyCourse()}>
         Buy Now
       </button>
    </div>
  )
}

export default CourseDetails
