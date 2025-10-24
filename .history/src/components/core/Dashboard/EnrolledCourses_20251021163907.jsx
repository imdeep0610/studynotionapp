import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../services/apiConnector';
import {getUserEnrolledCourses} from '../../../services/operations/profileAPI';
import '../../../App.css'

const EnrolledCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [enrolledCourses,setEnrolledCourses]=useState(null);
     const getEnrolledCourses=async()=>{
        try{
           const response=await getUserEnrolledCourses(token);
           setEnrolledCourses(response);
        }
        catch(error){
          console.log("Unable to fetch enrolled courses")
        }
     }

    useEffect(()=>{
         getEnrolledCourses();
    },[])
  return (
    <div>
        <div>Enrolled Courses</div>
        {
            !enrolledCourses ? (
                <div className='spinner'></div>
            ) : (
                !enrolledCourses.length ? (
                    <p>You have not enrolled in any courses</p>
                ) : (
                    <div>
                        <div>
                            <p>Course Name</p>
                            <p>Durations</p>
                            <p>Progress</p>
                        </div>
                        {
                            enrolledCourses.map((course,index)=>(
                               <div>
                                  <img src={course.thumbnail}/>
                                  <div>
                                    <p>{course.courseName}</p>
                                    <p>{course.description}</p>
                                  </div>
                               </div>
                            ))
                        }
                    </div>
                )
            )
        }
    </div>
  )
}

export default EnrolledCourses
