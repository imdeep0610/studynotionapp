import React, { useState } from 'react'

const InstructorChart = () => {
    const [currentChar,setCurrentChart]=useState("students");

    const getRandomColors=(numColors)=>{
       const colors=[];
       for(let i=0;i<numColors;i++){
          const color=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},
          ${Math.floor(Math.random()*256)})`
       }
    }
  return (
    <div>
      
    </div>
  )
}

export default InstructorChart
