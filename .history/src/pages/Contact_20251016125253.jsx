import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const Contact = () => {
  return (
    <div className='flex gap-x-10'>
        {/*Left part*/}
         <div className='flex flex-col gap-y-5'>
            {/*1st part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <BiSolidMessageRoundedDots />
                   <h2 className='text-richblack-5'>Chat on us</h2>
                </div>
                <div>
                    <p>
                        Our friendly team is here to help.
                        @mailaddress
                    </p>
                </div>
            </div>

            {/*2nd part*/}
            <div></div>

            {/*3rd part*/}
            <div></div>
         </div>

         {/*Right part*/}
         <div></div>
    </div>
  )
}

export default Contact
