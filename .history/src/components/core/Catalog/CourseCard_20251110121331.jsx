import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../common/RatingStars';

const CourseCard = ({course,height}) => {
  return (
    <div>
       <Link to={`/courses/${course._id}`}>
          <div>
             <div>
                <img src={course?.thumbnail}
                alt='Course Thumbnail'
                className={`${height} w-full rounded-xl object-cover`}/>
             </div>
             <div>
                 <p>{course?.courseName}</p>
                 <p>{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
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
