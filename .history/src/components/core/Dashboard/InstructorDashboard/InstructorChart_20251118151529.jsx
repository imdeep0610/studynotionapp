import React, { useState } from 'react';
import {Chart , registrables} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(...registrables);

const InstructorChart = ({courses}) => {
    const [currentChart,setCurrentChart]=useState("students");

    const getRandomColors=(numColors)=>{
       const colors=[];
       for(let i=0;i<numColors;i++){
          const color=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},
          ${Math.floor(Math.random()*256)})`
          colors.push(color);
       }
       return colors;
    }

    //create data for chart displaying student info
    const chartDataForStudents={
        labels:courses.map((course)=>course.courseName),
        datasets:[
            {
                data:courses.map((course)=>course.totalStudentsEnrolled),
                backgroundColor:getRandomColors(courses.length)
            }
        ]
    }

    //create data for chart displaying income info
    const chartDataForIncome={
        labels:courses.map((course)=>course.courseName),
        datasets:[
            {
                data:courses.map((course)=>course.totalAmountGenerated),
                backgroundColor:getRandomColors(courses.length)
            }
        ]
    }

    //create options
    const options={

    }

  return (
    <div>
       <p>Visualise</p>
       <div>
         <button onClick={()=>setCurrentChart("students")}>
            Student
         </button>
         <button>
            Income
         </button>
       </div>
       <div>
          <Pie
           data={currentChart==="students" ? chartDataForStudents : chartDataForIncome}
           options={options}/>
       </div>
    </div>
  )
}

export default InstructorChart
