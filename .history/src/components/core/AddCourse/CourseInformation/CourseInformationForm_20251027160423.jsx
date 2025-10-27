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

            }
            getCategories();
        })

  return (
    <div>
      
    </div>
  )
}

export default CourseInformationForm
