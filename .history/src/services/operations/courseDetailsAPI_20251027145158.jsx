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
   let result=null;
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
   toast.dismiss(toastId);
   return result;
}

//edit the course detilas
export const editCourseDetails=async(data,token)=>{
    let result=null;
    const toastId=toast.loading("Loading..........."); 
    try{
       const response=await apiConnector("POST",EDIT_COURSE_API,data,{
        "Content-Type":"multipaty/form-data",
         Authorisation:`Bearer ${token}`
       })
       console.log("EDIT_COURSE_API RESPONSE...............",response);
       if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details")
     }
     toast.success("Course details got updated successfully");
     result=response?.data?.data;

    }
    catch(error){
        console.log("EDIT_COURSE_API ERROR.............",error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}

//create a section
export const createSection=async(data,token)=>{
    let result=null;
    const toastId=toast.loading("Loading............");
    try{
       const response=await apiConnector("POST",CREATE_SECTION_API,data,{
        Authorisation:`Bearer ${token}`
       })
       console.log("CREATE_SECTION_API RESPONSE...........",response);
       if(!response?.data?.success){
        throw new Error("Could not create section")
       }
       toast.success("Course section created successfully");
       result=response?.data?.updatedCourse;
    }
    catch(error){
        console.log("CREATE_SECTION_API ERROR..............",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result
}

//create a subsection
export const createSubSection=async(data,token)=>{
    let result=null;
    const toastId=toast.loading("Loading..............");
    try{
        const response=await apiConnector("POST",CREATE_SUBSECTION_API,data,{
            Authorisation:`Bearer ${token}`
        })
        console.log("CREATE_SUBSECTION_API RESPONSE............",response);
        if(!response?.data?.success){
            throw new Error("Could not create sub-section")
        }
        toast.success("Sub-section created successfully");
        result=response?.data?.data;
    }
    catch(error){
        console.log();
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

//update section
export const updateSection=async(data,token)=>{
      let result = null
        const toastId = toast.loading("Loading...")
        try {
          const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
            Authorisation: `Bearer ${token}`,
          })
          console.log("UPDATE SECTION API RESPONSE............", response)
          if (!response?.data?.success) {
            throw new Error("Could Not Update Section")
          }
          toast.success("Course Section Updated")
          result = response?.data?.data
        } catch (error) {
          console.log("UPDATE SECTION API ERROR............", error)
          toast.error(error.message)
        }
        toast.dismiss(toastId)
        return result
}

//update sub-section
export const updateSubSection=async(data,token)=>{
    let result = null
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
          Authorisation: `Bearer ${token}`,
        })
        console.log("UPDATE SUB-SECTION API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Update Lecture")
        }
        toast.success("Lecture Updated")
        result = response?.data?.data
      } catch (error) {
        console.log("UPDATE SUB-SECTION API ERROR............", error)
        toast.error(error.message)
      }
      toast.dismiss(toastId)
      return result
}

//delete section
export const deleteSection=async(data,token)=>{
     let result = null
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("POST", DELETE_SECTION_API, data, {
          Authorisation: `Bearer ${token}`,
        })
        console.log("DELETE SECTION API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Delete Section")
        }
        toast.success("Course Section Deleted")
        result = response?.data?.data
      } catch (error) {
        console.log("DELETE SECTION API ERROR............", error)
        toast.error(error.message)
      }
      toast.dismiss(toastId)
      return result
}

//delete sub-section
export const deleteSubSection=async(data,token)=>{
     let result = null
      const toastId = toast.loading("Loading...")
      try {
        const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
          Authorisation: `Bearer ${token}`,
        })
        console.log("DELETE SUB-SECTION API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Delete Lecture")
        }
        toast.success("Lecture Deleted")
        result = response?.data?.data
      } catch (error) {
        console.log("DELETE SUB-SECTION API ERROR............", error)
        toast.error(error.message)
      }
      toast.dismiss(toastId)
      return result
}

//fecth instructor course
export const fetchInstructorCourses=async(token)=>{
   let result=[];
   const tokenId=toast.loading("Loading............");
   try{
      const response=await apiConnector("GET",GET_ALL_INSTRUCTOR_COURSES_API,null,{
        Authorisation:`Bearer ${token}`
      })
   }
   catch(error){
    console.log();
    toast.error(error.message);
   }
}
