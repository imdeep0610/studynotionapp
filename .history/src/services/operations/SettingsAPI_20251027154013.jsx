import {toast} from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { settingsEndpoints } from '../api';
import {setUser} from '../../slices/profileSlice';
import {logout} from './authAPI';

const  {
   UPDATE_DISPLAY_PICTURE_API,
   UPDATE_PROFILE_API,
   CHANGE_PASSWORD_API,
   DELETE_PROFILE_API
}=settingsEndpoints;

export function updateDisplayPicture(token,formData){
  return async (dispatch)=>{
    const toastId=toast.loading("Loading............");
    try{
       const response=await apiConnector("PUT",UPDATE_DISPLAY_PICTURE_API,formData,{
        "Content-Type":"multipart/form-data",
        Authorisation:`Bearer ${token}`
       })
       console.log("UPDATE_DISPLAY_PICTURE_API RESPONSE.............",response);
       if(!response?.data?.success){
         throw new Error(response.data.message);
       }
       toast.success("Display picture updated successfully");
       dispatch(setUser(response.data.data));
    } 
    catch(error){
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}