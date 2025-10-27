import {createSlice} from '@reduxjs/toolkit';

const initialState={
   step:1,
   course:null,
   
}

const courseSlice=createSlice({
  name:"course",
  initialState,
  reducres:{
    setStep:(state,action)=>{
    state.step=action.payload 
  }

})