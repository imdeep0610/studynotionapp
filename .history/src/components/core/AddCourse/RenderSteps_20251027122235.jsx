import React from 'react'
import { useSelector } from 'react-redux'

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
                  "bg-yellow-900 border-yellow-50 text-yellow-50" : 
                  ""}`}>

                </div>
              </>
            ))
           }
       </div>
    </>
  )
}

export default RenderSteps
