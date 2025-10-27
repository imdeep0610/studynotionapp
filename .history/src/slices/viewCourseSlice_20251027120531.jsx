import { createSlice } from "@reduxjs/toolkit";

const initialState={
    courseSectionData:[],
    courseEntireData:[],
    completedLectures:[],
    totalNoOfLectures:0
}


const viewCourseSlice=createSlice({
  name:"viewCourse",
  initialState,
  reducers:{
    setCourseSectionData:(state,action)=>{
       state.courseSectionData=action.payload
    },
    setEntireCourseData:(state,action)=>{
       state.courseEntireData=action.payload
    }
  }
})