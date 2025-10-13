import React from 'react'

const StatsComponent = () => {

    const Stats=[
        {
          count:"5K",
          label:"Active Students"
        },
        {
          count:"10+",
          label:"Mentors"
        },
        {
          count:"200+",
          label:"Courses"
        },
        {
          count:"50+",
          label:"Awards"
        },
    ]

  return (
    <div>
        <div className=' flex gap-x-10  justify-evenly w-full h-[200px] m-auto bg-richblack-800 mt-16 p-16'>
       {Stats.map((item,index)=>(
         <div key={index} className='flex flex-col'>
            <h1 className='text-2xl font-medium text-richblack-5'>{item.count}</h1>
            <p className='text-richblack-300'>{item.label}</p>
         </div>
       ))}
       </div>
    </div>
  )
}

export default StatsComponent
