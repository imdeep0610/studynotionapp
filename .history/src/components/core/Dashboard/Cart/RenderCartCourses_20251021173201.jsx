import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiStar } from "react-icons/ci";
import { ImStarFull } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../../../../slices/cartSlice';

const RenderCartCourses = () => {

    const {cart}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  return (
    <div>
       {
        cart.map((course,index)=>(
            <div>
                <div>
                    <img src={course?.thumbnail} alt={course.courseName}/>
                    <div>
                       <p>{course?.courseName}</p>
                       <p>{course?.category?.name}</p>
                       <div>
                          <span>4.8*</span>
                          <ReactStars
                          count={5}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                          emptyIcon={<CiStar />}
                          fullIcon={<ImStarFull />}/>
                          <span>{course?.ratingAndReviews?.length} Ratings</span>
                       </div>
                    </div>
                </div>

                <div>
                    <button
                    onClick={()=>dispatch(removeFromCart)}>
                        <MdDelete />
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default RenderCartCourses
