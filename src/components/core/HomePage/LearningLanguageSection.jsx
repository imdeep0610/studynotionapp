import React from 'react';
import HighlightText from './HighlightText';
import KnowYourProgress from '../../../assets/Images/Know_your_progress.png';
import CompareWithoffers from '../../../assets/Images/Compare_with_others.png';
import PlanYourLesson from '../../../assets/Images/Plan_your_lessons.png';
import CTAButton from './Button';

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
       <div className=' flex flex-col gap-5 items-center'>
           <div className='text-3xl font-semibold text-center'>
              Your swiss knife for
              <HighlightText text={' learning any language'}/>
           </div>
           <div className='text-center text-richblack-600 mx-auto text-base mt-3 
                 font-medium w-[40%]'>
             <p>Using spin making learning multiple languages easy. With 20+ languages realistic
              voice-over , progress tracking , custom schedule and more.
             </p>
           </div>
           <div className='flex items-center justify-center mt-8'>
              <img src={KnowYourProgress} 
                   alt='KnowYourProgress' 
                   className='object-contain -mr-32'/>
              <img src={CompareWithoffers} 
                   alt='CompareWithOthers' 
                   className='object-contain'/>
              <img src={PlanYourLesson} 
                   alt='PlanYourLesson' 
                   className='object-contain -ml-36'/> 
           </div>
           <div className='w-fit'>
              <CTAButton active={true} linkto={'/signup'}>
                 <div>Learn More</div>
              </CTAButton>
           </div>
           
       </div>
    </div>
  )
}

export default LearningLanguageSection
