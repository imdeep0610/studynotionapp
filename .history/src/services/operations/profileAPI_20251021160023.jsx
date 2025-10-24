import toast from "react-hot-toast";
import { profileEndpoints } from "../api";
import {setLoading, setUser} from '../../slices/profileSlice';
import { apiConnector } from "../apiConnector";


const {GET_USER_DETAILS_API,GET_USER_ENROLLED_COURSES_API}=profileEndpoints

export function getUserDetails(token,navigate){
   return async(dispatch)=>{
      const toastId=toast.loading("Loading.....");
      dispatch(setLoading(true));
      
      try{
          const response=await apiConnector("GET",GET_USER_DETAILS_API,null,{
            Authorization:`Bearer ${token}`
          });
          console.log("GET_USER_DETAILS_API RESPONSE............",response);

          if(!response.data.success){
            throw new Error(response.data.message);
          }
          const userImage=response.data.data.image
          ? response.data.data.image :
          `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
          dispatch(setUser({...response.data.data,image:userImage}))
      }
      catch(error){
        console.log();
      }
   }
}