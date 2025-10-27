import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCourseCategories} from '../../../../services/operations/courseDetailsAPI';

const CourseInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValue,
        formState:{errors},
        }=useForm();
        
        const dispatch=useDispatch();
        const {course,editCourse}=useSelector((state)=>state.course);
        const [loading,setLoading]=useState(false);
        const [courseCategories,setCourseCategories]=useState([]);

        useEffect(()=>{
            const getCategories=async()=>{
                 setLoading(true);
                 const categories=await fetchCourseCategories();
                 if(categories.length>0){
                  setCourseCategories(categories);
                 }
                 setLoading(false);
            }
            if(editCourse){
               setValue("courseTitle",course.courseName);
               setValue("courseShortDesc",course.courseDescription);
               setValue("coursePrice",course.coursePrice);
               setValue("courseTags",course.courseTags);
               setValue("courseBenefits",course.courseBenefits);
               setValue("courseCategory",course.courseName);
               setValue("courseRequirements",course.courseName);
               setValue("courseImage",course.courseName);
            }
            getCategories();
        })

  return (
    <div>
      
    </div>
  )
}

export default CourseInformationForm
