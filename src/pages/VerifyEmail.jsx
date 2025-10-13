import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import OTPInput from 'react-otp-input';
import { Link, useNavigate} from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { sentOtp, signup } from '../services/operations/authAPI';

const VerifyEmail = () => {

    const {loading,signupData}=useSelector((state)=>state.auth);
    const [otp,setOtp]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!signupData){
           navigate("/signup")
        }
    },[])

    const handleSubmit=(e)=>{
       e.preventDefault();
       const{accountType,
         firstName,
         lastName,
         email,
         password,
         confirmPassword}=signupData
        
       dispatch(signup(
         accountType,
         firstName,
         lastName,
         email,
         password,
         confirmPassword,
         otp,
         navigate))
    }

  return (
    <div className='w-[370px] m-auto text-center'>
       {loading ? (
        <div className='spinner'></div>
       ) : (
        <div className='flex flex-col text-start p-15'>
            <h1 className='text-richblack-5'>Verify Email</h1>
            <p className='text-richblack-400 mt-3'>
                A verification code has been sent to you.Enter the code below.
            </p>
            <form onSubmit={handleSubmit}>
                <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) =>(<input {...props}/>)}
                className='flex gap-x-2'/>
                <button type='submit' className='bg-yellow-50 text-richblack-900 mt-5 rounded-[8px] 
                             font-medium py-[8px] px-[12px]'>
                    Verify Email
                </button>
            </form>
            <div className='flex  justify-between'>
              <Link to="/" className='text-richblack-5 flex gap-x-2 items-center mt-4'>
                 <IoIosArrowRoundBack/>
                 <p>Back to login</p>
              </Link>
              <button className='flex items-center gap-x-2 text-richblue-400 mt-4'
              onClick={()=>dispatch(sentOtp(signupData.email,navigate))}> 
                   <GiAnticlockwiseRotation />
                   <p>Resent it</p>
              </button>
            </div>
        </div>
       )}
    </div>
  )
}

export default VerifyEmail
