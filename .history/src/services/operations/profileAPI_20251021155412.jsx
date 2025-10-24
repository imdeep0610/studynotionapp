import toast from "react-hot-toast";
import { profileEndpoints } from "../api";
import {setLoading} from '../../slices/profileSlice';


const {GET_USER_DETAILS_API,GET_USER_ENROLLED_COURSES_API}=profileEndpoints

export function getUserDetails(token,navigate){
   return async(dispatch)=>{
      const toastId=toast.loading("Loading.....");
      dispatch(setLoading(true));
      
      try{

      }
      catch(error){
        console.log();
      }
   }
}