import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const CourseReviewModal = ({setReviewModal}) => {

  const {user}=useSelector((state)=>state.profile);
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
                  src={``}/>
               </div>
            </div>
       </div>
    </div>
  )
}

export default CourseReviewModal
