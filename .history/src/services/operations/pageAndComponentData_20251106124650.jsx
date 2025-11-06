import React from 'react'
import toast from 'react-hot-toast';
import { apiConnector } from '../apiConnector';

export const getCatalogPageData =async(categoryId)=>{
  const toastId=toast.loading("Loading.........")  
  let result=[];
  try{
      const response=await apiConnector("POST",)
  }
  catch(error){

  }
  toast.dismiss(toastId);
  return result;
}


