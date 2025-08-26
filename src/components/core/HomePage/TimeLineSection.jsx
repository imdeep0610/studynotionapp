import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimeLineImage from '../../../assets/Images/TimelineImage.png'

 const timeline=[
        {
            logo:Logo1,
            heading:'Leadership',
            description:'Fully commited to successul company'
        },
         {
            logo:Logo2,
            heading:'Responsibility',
            description:'Students will always be our top priority'
        },
         {
            logo:Logo3,
            heading:'Flexibility',
            description:'The ability to switch is an important skills'
        },
         {
            logo:Logo4,
            heading:'Solve the problem',
            description:'Code your way to a solution'
        }
    ]

const TimeLineSection = () => {

  return (
    <div>
       <div className='flex gap-15 items-center bg-white mx-auto w-11/12'>
          <div className='flex flex-col gap-5 w-[45%] ml-9'>
             {
              timeline.map((item,index)=>{
                return(
                  <div key={index} className='flex gap-6'>
                      <div className='w-[50px] h-[50px] bg-white flex items-center'>
                          <img src={item.logo} alt='Logo'/>
                      </div>
                      <div className='flex flex-col'>
                        <h2 className='font-bold'>{item.heading}</h2>
                        <p>{item.description}</p>
                      </div>
                  </div>
                ) 
              })
             }
          </div>
          <div className='relative shadow-blue-400 mb-10'>
              <img src={TimeLineImage} alt='TimeLineImage'
               className='rounded-lg shadow-white object-cover h-fit mt-10'/>
               <div className='absolute left-[12%] translate-y-[-50%] bg-caribbeangreen-700 flex text-white uppercase py-6'>
                  <div className='flex gap-5 items-center border-r border-caribbeangreen-200 px-7'>
                    <p className='text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-100 text-sm'>Years of experience</p>
                  </div>
                  <div className='flex gap-5 items-center px-7'>
                      <p className='text-3xl font-bold'>250</p>
                      <p className='text-caribbeangreen-100 text-sm'>Types of courses</p>  
                  </div>
               </div>
          </div>
       </div>
    </div>
  )
}

export default TimeLineSection
