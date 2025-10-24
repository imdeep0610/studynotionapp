import { useSelector } from "react-redux"
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";



export default function Cart(){
   const {total,totalItems} =useSelector((state)=>state.cart);

    return(
        <div>
            <h1>Your Cart</h1>
            <p>{totalItems} Courses in Cart</p>

            {
                total > 0 ? (
                    <div>
                        <RenderCartCourses/>
                        <RenderTotalAmount/>
                    </div>
                ) : (
                    <div className="spinner"></div>
                )
            }
        </div>
    )
}