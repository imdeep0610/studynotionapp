import { useSelector } from "react-redux"



export default function Cart(){
   const {total,totalItems} =useSelector((state)=>state.cart);

    return(
        <div>
            <h1>Your Cart</h1>
            <p>

            </p>
        </div>
    )
}