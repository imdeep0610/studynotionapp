import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {fetchInstructorCourses} from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import '../../../../App.css';

const Instructor = () => {

    const [loading,setLoading]=useState(false);
    const [instructorData,setInstructorData]=useState(null);
    const [courses,setCourses]=useState([]);

    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);

    useEffect(()=>{
        const getCourseDataWithStats=async()=>{
            setLoading(true);
            const instructorApiData = await getInstructorData(token);
            const result=await fetchInstructorCourses(token);

            console.log(instructorApiData);

            if(instructorApiData.length){
              setInstructorData(instructorApiData);
            }
            if(result){
               setCourses(result);
            }
            setLoading(false);
        }
        getCourseDataWithStats();
    },[]);

    const totalAmount=instructorData?.reduce((acc,curr)=>acc+curr.totalAmountGenerated,0);
    const totalStudents=instructorData?.reduce((acc,curr)=>acc+curr.totalStudentsEnrolled,0);

  return (
    <div className='text-richblack-5'>
        <div>
            <h1>Hi {user?.firstName}</h1>
            <p>Let's start something new</p>
        </div>

        {loading ? (
            <div className='spinner'></div>
        ) : courses.length > 0 ? (
            <div>
                <div>
                    <InstructorChart courses={instructorData}/>
                    <div>
                        
                    </div>
                </div>
            </div>
        ) : (
            <div></div>
        )}
    </div>
  )
}

export default Instructor
