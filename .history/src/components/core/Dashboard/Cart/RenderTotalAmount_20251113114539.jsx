import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';
import {buyCourse} from '../../../../services/operations/studentFeaturesAPI';

const RenderTotalAmount = () => {

    const {total,cart}=useSelector((state)=>state.cart);


    const handleBuyCourse=()=>{
        const course=cart.map((course)=>course._id);
        //here API integration happen which took us to payment gateway
        buyCourse{token,courses,user,navigate,dispatch};
    }
  return (
    <div>
       <p>Total:</p>
       <p>Rs {total}</p>
       <IconBtn
       text="Buy Now"
       onclick={handleBuyCourse}
       customClasses={'w-full justify-center'}/>
    </div>
  )
}

export default RenderTotalAmount
