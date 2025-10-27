import {createSlice} from '@reduxjs/toolkit';

const initialState={

}

const courseSlice=createSlice({
  name:"course",
  initialState,
  reducres:{
    setStep:(state,action)=>{
    state.step=action.payload 
  }
})