import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../common/RatingStars';

const CourseCard = ({course,height}) => {
  return (
    <div>
       <Link to={}>
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
                 <p></p>
             </div>
          </div>
       </Link>
    </div>
  )
}

export default CourseCard
