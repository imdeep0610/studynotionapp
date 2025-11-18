import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Instructor = () => {

    const [loading,setLoading]=useState(false);
    const [instructorData,setInstructorData]=useState(null);
    const [courses,setCourses]=useState([]);

    const {token}=useSelector((state)=>state.auth);

    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const instructorApiData = await getInstructorData(token);
        }
        getCourseDataWithStats();
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Instructor
