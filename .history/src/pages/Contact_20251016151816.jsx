import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoEarthSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import ContactUsForm from '../components/ContactPage/ContactUsForm';

const Contact = () => {
  return (
     <div className='w-11/12 max-w-maxContent mx-auto'>
    {/*Section1*/}    
    <section>
    <div className='flex gap-x-10 justify-center items-start mx-auto mt-20'>
        {/*Left part*/}
         <div className='flex flex-col gap-y-5   bg-richblack-800 p-10'>
            {/*1st part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <BiSolidMessageRoundedDots className='text-richblack-200'/>
                   <h2 className='text-richblack-5'>Chat on us</h2>
                </div>
                <div className='px-6 mb-5' >
                    <p className='text-richblack-300'>
                        Our friendly team is here to help.
                    </p>
                    <a href='mailto:deep06102001@gmail.com' className='text-richblack-300'>@mailaddress</a>
                </div>
            </div>

            {/*2nd part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <IoEarthSharp className='text-richblack-200' />
                   <h2 className='text-richblack-5'>Visit us</h2>
                </div>
                <div className='px-6 mb-5'>
                    <p className='text-richblack-300'>
                        Come and say hello at our office HQ.
                    </p>
                    <p className='text-richblack-300'>Here is the location/address</p>
                </div>
            </div>

            {/*3rd part*/}
            <div className='flex flex-col gap-y-3'>
                <div className='flex gap-x-3'>
                   <FaPhone className='text-richblack-200'/>
                   <h2 className='text-richblack-5'>Call us</h2>
                </div>
                <div className='px-6 mb-5'>
                    <p className='text-richblack-300'>
                        Mon-Fri from 8am-5pm
                    </p>
                    <p className='text-richblack-300'>+123 456 7890</p>
                </div>
            </div>
         </div>

         {/*Right part*/}
         <div className='flex flex-col gap-y-5 border border-richblack-700 rounded-lg p-10 mb-16'>
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
    </section>

    {/*Section2*/}
    <section>
         <div className='flex flex-col gap-y-5 justify-center items-center mx-auto mb-10'>
           <h2 className='text-richblack-5 text-3xl font-bold mb-5'>Review from other learners</h2>
           {/*<ReviewSlider/>*/} 
         </div>
      </section>

      {/*Section2*/}
      <section></section>
    </div>
  )
}

export default Contact
