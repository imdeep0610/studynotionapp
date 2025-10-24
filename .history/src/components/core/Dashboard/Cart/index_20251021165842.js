import { useSelector } from "react-redux"



export default function Cart(){
   const {total,totalItems} =useSelector((state)=>state.auth);

    return(
        <div>
            <h1>Your Cart</h1>
            <p>{totalItems} Courses in Cart</p>
        </div>
    )
}