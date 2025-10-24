import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoEarthSharp } from "react-icons/io5";

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
                    <p className='text-richblack-5'>
                        Our friendly team is here to help.
                        @mailaddress
                    </p>
                </div>
            </div>

            {/*2nd part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <IoEarthSharp />
                   <h2 className='text-richblack-5'>Visit us</h2>
                </div>
                <div>
                    <p className='text-richblack-5'>
                        Come and say hello at our office HQ.
                        Here is the location/address
                    </p>
                </div>
            </div>

            {/*3rd part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <IoEarthSharp />
                   <h2 className='text-richblack-5'>Visit us</h2>
                </div>
                <div>
                    <p className='text-richblack-5'>
                        Come and say hello at our office HQ.
                        Here is the location/address
                    </p>
                </div>
            </div>
         </div>

         {/*Right part*/}
         <div></div>
    </div>
  )
}

export default Contact
