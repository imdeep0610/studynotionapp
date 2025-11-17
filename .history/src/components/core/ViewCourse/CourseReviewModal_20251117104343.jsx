import React from 'react';
import { RxCross2 } from "react-icons/rx";

const CourseReviewModal = ({setReviewModal}) => {
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
                  src={}/>
               </div>
            </div>
       </div>
    </div>
  )
}

export default CourseReviewModal
