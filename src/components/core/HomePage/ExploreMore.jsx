import React, { useState } from 'react';
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName=[
    "Free",
    "New To Coding",
    "Most Popular",
    "Skill Paths",
    "Career Paths"
]

const ExploreMore = () => {
    const [currentTab,setCurrentTab]=useState(tabsName[0]);
    const [courses,setCourses]=useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
          setCurrentTab(value);
          const result=HomePageExplore.filter((course)=>course.tag===value);
          setCourses(result);
          setCurrentCard(result[0].courses[0].heading)
    }
  return (
    <div>
       <div className='flex flex-col gap-5 items-center'>
          <div className='font-semibold text-3xl text-center'>
            Unlock the 
            <HighlightText text={' power of code'}/>
          </div>
          <p className='text-center mt-3 text-richblack-300 text-md text-[16px]'>
            Learn to build anything you can imagine
          </p>
          <div className='flex rounded-full bg-richblack-800 gap-10 px-2 py-2
                           mt-5 border-richblack-100'>
             {tabsName.map((item,index)=>{
                return(
                    <div key={index} className={`text-[16px] flex items-center gap-2
                    ${currentTab===item ? "bg-richblack-900 text-richblack-5 font-medium" : 
                    " text-richblack-200"} rounded-full tarnsition-all duration-200 cursor-pointer
                    hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`} 
                    onClick={()=>setMyCards(item)}>
                        {item}
                    </div>
                )
             })}
          </div>
          <div className='h-[150px]'></div>

          {/*Course card*/}
          {/* <div className='absolute flex gap-10 justify-between w-full'>
            {
                courses.map((item,index)=>{
                    return(
                       <CourseCard
                        key={index}
                        cardData={item}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}/>  
                    )
                })
            }
          </div> */}
       </div>
    </div>
  )
}

export default ExploreMore
