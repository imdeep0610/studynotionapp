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
    },
    setCompletedLectures:(state,action)=>{
       state.completedLectures=action.payload
    },
    setTotalNoLectures:(state,action)=>{
      state.totalNoOfLectures=action.payload
    },
    updateCopletedLectures:(state,action)=>{
        state.completedLectures=[...state.completedLectures,action.payload]
    }
  }
})