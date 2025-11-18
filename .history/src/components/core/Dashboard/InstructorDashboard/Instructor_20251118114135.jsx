import React, { useEffect, useState } from 'react';

const Instructor = () => {

    const [loading,setLoading]=useState(false);
    const [instructorData,setInstructorData]=useState(null);
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const response =await 
        }
        getCourseDataWithStats();
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Instructor
