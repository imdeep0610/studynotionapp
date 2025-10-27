import {toast} from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import {courseEndpoints} from '../api';


const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
}=courseEndpoints;

export const getAllCourse=async()=>{
   const toastId=toast.loading("Loading......");
   let result=[];
   try{
      const response=await apiConnector("GET",GET_ALL_COURSE_API);
      if(!response?.data?.success){
          throw new Error("Could not fetch course categories");
      }
      result=response?.data?.data;
   }
   catch(error){
     console.log("GET_ALL_COURSE_API ERROR............",error);
     toast.error(error.message);
   }
   toast.dismiss(toastId);
   return result;
}

export const fetchCourseDetails=async(courseId)=>{
   const toastId=toast.loading("Loading...........");
   let result=null;
    try{
     const response=await apiConnector("POST",COURSE_DETAILS_API,{
        courseId
     })
     console.log("COURSE_DETAILS_API RESPONSE............");
     if(!response?.data?.success){
        throw new Error(response.data.message);
     }
     let result=response.data;
    }
    catch(error){
        console.log("COURSE_DETAILS_API ERROR...........",error);
        result=error.response.data
    }
    toast.dismiss(toastId);
    return result;
}

//fecthing the available course categories
export const fetchCourseCategories=async()=>{
    let result=[];
    try{
       const response=await apiConnector("GET",COURSE_CATEGORIES_API);
        console.log("COURSE_CATEGORIES_API RESPONSE.............",response);
        if(!response?.data?.success){
            throw new Error("Could not fecth course categories");
        } 
        const result=response?.data?.data;
    }
    catch(error){
         console.log("COURSE_CATEGORIES_API ERROR.............",error);
         toast.error(error.message);
    }
    return result;
}

//add the course details
export const addCourseDetails=async(data,token)=>{
   const toastId=toast.loading("Loading...........");
   const result=null;
   try{
      const response=await apiConnector("POST",CREATE_COURSE_API,data,{
        "Content-Type":"multipart/form-data",
        Authorisation:`Bearer ${token}`
      })
      console.log("CREATE_COURSE_API RESPONSE.............",response);
      if(!response?.data?.success){
        throw new Error("Could not add course details")
      }
      toast.success("Course details added successfully");
      result=response?.data?.data;
   }
   catch(error){
    console.log("CREATE_COURSE_API ERROR..............",error);
    toast.error(error.message);
   }   
}