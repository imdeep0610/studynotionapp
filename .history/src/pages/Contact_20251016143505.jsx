import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoEarthSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import ContactUsForm from '../components/ContactPage/ContactUsForm';

const Contact = () => {
  return (
    <div className='flex gap-x-10 justify-center items-center mx-auto mt-20'>
        {/*Left part*/}
         <div className='flex flex-col gap-y-5 justify-start'>
            {/*1st part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <BiSolidMessageRoundedDots />
                   <h2 className='text-richblack-5'>Chat on us</h2>
                </div>
                <div>
                    <p className='text-richblack-300'>
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
                    <p className='text-richblack-300'>
                        Come and say hello at our office HQ.
                        Here is the location/address
                    </p>
                </div>
            </div>

            {/*3rd part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <FaPhone />
                   <h2 className='text-richblack-5'>Call us</h2>
                </div>
                <div>
                    <p className='text-richblack-300'>
                        Mon-Fri from 8am-5pm
                        +123 456 7890
                    </p>
                </div>
            </div>
         </div>

         {/*Right part*/}
         <div className='flex flex-col gap-y-5 border border-richblack-400 rounded-lg p-8 mb-16'>
             <h1 className='text-richblack-5 text-3xl font-bold w-[500px]'>
                Got a idea? We've got the skills.
                Let's team up
             </h1>
             <p className='text-richblack-300'>
                Tell us more about yourself and what you've got in mind.
             </p>
             <div >
             <ContactUsForm/>
             </div>
         </div>
    </div>
  )
}

export default Contact
