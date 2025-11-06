import React from 'react'
import toast from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { catalogData } from '../api';

export const getCatalogPageData =async(categoryId)=>{
  const toastId=toast.loading("Loading.........")  
  let result=[];
  try{
      const response=await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,
        {categoryId:categoryId})

        if(!response?.data?.success){
         throw new Error("Could not fetch category page data")
         const result=response?.data;
        }
  }
  catch(error){

  }
  toast.dismiss(toastId);
  return result;
}


