import {createSlice} from '@reduxjs/toolkit';

const initialState={
   step:1,
   course:null,
   editCourse:false,
   paymentLoading:false
}

const courseSlice=createSlice({
  name:"course",
  initialState,
  reducers:{
    setStep:(state,action)=>{
    state.step=action.payload 
  },
  setCourse:(state,action)=>{
     state.course=action.payload
  },
   setEditCourse:(state,action)=>{
    state.editCourse=action.payload
   }
})
export 