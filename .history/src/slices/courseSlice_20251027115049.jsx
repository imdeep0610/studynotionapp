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
  }

})