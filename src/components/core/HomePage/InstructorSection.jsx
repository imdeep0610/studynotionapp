import React from 'react';
import Instructor from '../../../assets/Images/Instructor.png';
import HighlightText from './HighlightText';
import CTAButton from './Button';
import { IoMdArrowRoundForward } from "react-icons/io";

const InstructorSection = () => {
  return (
    <div className='mt-16'>
       <div className='flex gap-20 items-center'>
         <div className='w-[50%]'>
            <img src={Instructor} alt='Instructor' className='shadow-white'/>
         </div>
         <div className='w-[50%] flex flex-col'>
            <div className='text-3xl font-semibold w-[50%]'>
                Become an 
                <HighlightText text={" instructor"}/>
            </div>
            <p className='font-medium text-[16px] w-[80%] mt-8 text-richblack-300'>
                Instructors from around the world teach millions of students on StudyNotion. We provide 
                the tools and skills to teach what you love.
            </p>
            <div className='w-fit mt-10'>
                <CTAButton active={true} linkto={'/signup'}>
               <div className='flex gap-2 items-center'>
                  Start Learning Today
                   <IoMdArrowRoundForward />
               </div>
            </CTAButton>
            </div>
         </div>
       </div>
    </div>
  )
}

export default InstructorSection
