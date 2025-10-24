import { endpoints } from "../api";
import {toast} from 'react-hot-toast';
import {setLoading, setToken} from '../../slices/authSlice';
import { apiConnector } from "../apiConnector";
import {setUser} from '../../slices/profileSlice';
import {resetCart} from '../../slices/cartSlice';

const {
 SENDOTP_API,
 LOGIN_API,
 SIGNUP_API,
 RESETPASSTOKEN_API,
 RESETPASSWORD_API
}=endpoints

export function sentOtp(email, navigate){
  return async(dispatch)=>{
  const toastId=toast.loading("Loading...");
  dispatch(setLoading(true));
  try{
    const response=await apiConnector("POST",SENDOTP_API ,{
        email,
        checkUserPresent:true
    })
    console.log("SENDOTP API RESPONSE........",response);
    console.log(response.data.success);

    if(!response.data.success){
       throw new Error(response.data.message);
    }
    toast.success("OTP Sent Successfully");
    navigate("/verify-email")
  }
  catch(error){
   console.log("SENDOTP API ERROR............",error);
   toast.error("Could not sent otp");
  }
  dispatch(setLoading(false));
  toast.dismiss(toastId);
  }
}

export function signup(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
){
    return async(dispatch)=>{
  const toastId=toast.loading("Loading...");
  dispatch(setLoading(true));
  try{
    const response=await apiConnector("POST",SIGNUP_API,{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp
    })

    console.log("SIGNUP API RESPONSE.........",response);

    if(!response.data.success){
      throw new Error(response.data.message)
    }
    toast.success("Signup successfull");
    navigate("/login");
  }
  catch(error){
    console.log("SIGNUP API ERROR..........",error);
    toast.error("Signup Failed");
    navigate("/signup");
  }
   dispatch(setLoading(false));
   toast.dismiss(toastId);
    }
}

export function login(email,password,navigate){
   return async (dispatch)=>{
    const toastId=toast.loading("Loading........");
    dispatch(setLoading(true));
    try{
        const response=await apiConnector("POST",LOGIN_API,{
            email,
            password
        })

        if (response.data.success) {
  dispatch(setToken(response.data.token));
  dispatch(setUser(response.data.user));
  localStorage.setItem("token", JSON.stringify(response.data.token));
  localStorage.setItem("user", JSON.stringify(response.data.user));
  toast.success("Login successful");
  navigate("/dashboard/my-profile");
}

        console.log("LOGIN API RESPONSE........",response);
        console.log(response.data.success)
    }
    catch(error){
       console.log("LOGIN API ERROR........",error);
       toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
   }
}

export function logout(navigate){
  return(dispatch)=>{
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

export function getPasswordResetToken(email,setEmailSent){
   return async(dispatch)=>{
    dispatch(setLoading(true));
    try{
        const response=await apiConnector("POST",RESETPASSTOKEN_API,{email});
        console.log("RESRET PASSWORD TOKEN RESPONSE.....",response);

        if(!response.data.success){
           throw new Error(response.data.message)
        }
        toast.success("Reset email sent");
        setEmailSent(true);
    }
    catch(error){
      console.log("RESET PASSWORD TOKEN ERROR");
      toast.error("Failed to send email for resetting email");
    }
    dispatch(setLoading(false));
    
   }
}

export function resetPassword(password,confirmPassword,token){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try{
       const response=await apiConnector("POST",RESETPASSWORD_API,{
        password,
        confirmPassword,
        token
       })
       console.log("RESET PASSWORD RESPONSE......",response)

       if(!response.data.success){
           throw new Error(response.data.message)
       }
       console.log("Password has been reset successfully")
    }
    catch(error){
      console.log("RESET PASSWORD ERROR");
      toast.error("Failed to reset password");
    }
    dispatch(setLoading(false));
  }
}