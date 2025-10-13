import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import Button from '../../core/HomePage/Button'

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];


const LearningGrid = () => {

  return (
    <div>
        <div className='grid xl:grid-cols-4 grid-cols-1 grid-rows-2 w-[350px] xl:w-fit mx-auto mb-10 mt-16 py-10'>
            {LearningGridArray.map((card,index)=>(
              <div key={index} className={`${index===0 && 'col-span-2 h-[294px]'}
              ${card.order % 2 !==0 ? 'bg-richblack-700 h-[294px]' : 'bg-richblack-800 h-[294px]' }
              ${card.order===3 && 'col-start-2'}`}>
                   {
                    card.order<0 ? (
                      <div className='w-[90%] flex flex-col bg-richblack-900 px-5'>
                        <h1 className='w-[60%] text-3xl text-richblack-5 mb-4'>
                            {card.heading}
                            <HighlightText text={card.highlightText}/>
                        </h1>
                        <p className='text-richblack-200 mb-8'>{card.description}</p>
                        <Button active={true} linkto={card.BtnLink}
                        className=''>
                            {card.BtnText}
                        </Button>
                      </div>
                    ) : (
                        <div>
                            <h2 className='text-richblack-5 mb-6 py-8 text-2xl font-medium '>{card.heading}</h2>
                            <p className='text-richblack-400'>{card.description}</p>
                        </div>
                    )
                   }
              </div>
            ))}
        </div>
    </div>
  )
}

export default LearningGrid
