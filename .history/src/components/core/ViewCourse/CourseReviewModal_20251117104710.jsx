import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const CourseReviewModal = ({setReviewModal}) => {

  const {user}=useSelector((state)=>state.profile);
  const {token}=useSelector((state)=>state.auth);
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
       </div>
    </div>
  )
}

export default CourseReviewModal
