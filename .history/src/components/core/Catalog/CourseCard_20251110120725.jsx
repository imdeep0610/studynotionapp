import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../common/RatingStars';

const CourseCard = () => {
  return (
    <div>
       <Link>
          <div>
             <div>
                <img src={}/>
             </div>
             <div>
                 <p></p>
                 <p></p>
                 <div>
                     <span></span>
                     <RatingStars/>
                     <span></span>
                 </div>
             </div>
          </div>
       </Link>
    </div>
  )
}

export default CourseCard
