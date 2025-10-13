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

<<<<<<< HEAD
const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] mt-16 xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`
              ${i === 0 && "xl:col-span-2 xl:h-[294px]"}  
            ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } 
            ${card.order === 3 && "xl:col-start-2"}`}>
            {
              card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
=======

const LearningGrid = () => {

  return (
    <div>
        <div className='grid grid-cols-4 grid-rows-2 w-full mx-auto mb-10 mt-16 py-10'>
            {LearningGridArray.map((card,index)=>(
              <div key={index} className={`${index===0 && 'col-span-2'}
              ${card.order%2!==0 ? 'bg-richblack-700 h-[250px]' : 'bg-richblack-800 h-[250px]' }
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
>>>>>>> 79fe700 (Signup)
