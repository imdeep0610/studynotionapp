import React, { useState } from 'react';
import {Chart , registrables} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(...registrables);

const InstructorChart = ({courses}) => {
    const [currentChar,setCurrentChart]=useState("students");

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
                data:courses.map((course)=>course.totalStudentsEnrolled)
            }
        ]
    }


    //create data for chart displaying income info


    //create options

  return (
    <div>
      
    </div>
  )
}

export default InstructorChart
