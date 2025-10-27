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
        
       })
    } 
    catch(error){
        console.log();
        toast.error()
    }
  }
}