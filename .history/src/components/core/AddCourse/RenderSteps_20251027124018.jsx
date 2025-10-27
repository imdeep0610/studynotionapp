import React from 'react';
import { useSelector } from 'react-redux';
import { FaCheck } from "react-icons/fa6";

const RenderSteps = () => {

   const {step}=useSelector((state)=>state.course);

  const steps=[
    {
      id:1,
      title:'Course Information'
    },
    {
      id:2,
      title:'Course Builder'
    },
    {
      id:3,
      title:'Publish'
    }
  ]

  return (
    <>
       <div>
           {
            steps.map((item)=>(
              <>
                <div key={item.id} className={`${step===item.id ? 
                  <div>
                  "bg-yellow-900 border-yellow-50 text-yellow-50" : 
                  "bg-richblack-800 text-richblack-300 border-richblack-700"}`}>
                       {
                        step>item.id ? (<FaCheck />) : (item.id)
                       }
                </div>
                </div>
              </>
            ))
           }
       </div>
    </>
  )
}

export default RenderSteps
