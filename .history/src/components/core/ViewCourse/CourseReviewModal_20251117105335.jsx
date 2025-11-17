import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";

const CourseReviewModal = ({setReviewModal}) => {

  const {user}=useSelector((state)=>state.profile);
  const {token}=useSelector((state)=>state.auth);

  const {
    register,handleSubmit,formState:{errors},setValue
  }=useForm();

  useEffect(()=>{
    setValue("courseExperience","");
    setValue("courseRating",0)
  },[])

  const onSubmit=()=>{

  }

  return (
    <div>
       <div>
          {/*Modal header*/}
           <div>
             <p>Add Review</p>
             <button onClick={setReviewModal(false)}>
                <RxCross2 />
             </button>
           </div>

           {/*Modal Body*/}
            <div>
               <div>
                  <img
                  src={user?.image}
                  alt='UserImage'
                  className='aspect-square w-[50px] rounded-full object-cover'/>
               </div>
               <div>
                  <p>{user?.firstName} {user?.lastName}</p>
                  <p>Posting Publicly</p>
               </div>
            </div>

            <form 
              onSubmit={handleSubmit=>(onSubmit)}
              className='mt-6 flex flex-col items-center'>
                  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
            </form>
       </div>
    </div>
  )
}

export default CourseReviewModal
