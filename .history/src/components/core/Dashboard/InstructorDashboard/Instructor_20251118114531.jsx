import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {fetchInstructorCourses} from '../../../../services/operations/courseDetailsAPI';

const Instructor = () => {

    const [loading,setLoading]=useState(false);
    const [instructorData,setInstructorData]=useState(null);
    const [courses,setCourses]=useState([]);

    const {token}=useSelector((state)=>state.auth);

    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const instructorApiData = await getInstructorData(token);
            const result=await fetchInstructorCourses(token);

            console.log(instructorApiData);

            if(!instructorApiData){

            }
        }
        getCourseDataWithStats();
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Instructor
