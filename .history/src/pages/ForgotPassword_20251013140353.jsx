import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { getPasswordResetToken } from '../services/operations/authAPI';
import '../index.css';


const ForgotPassword = () => {
  const {loading}=useSelector((state)=>state.auth);
  const [emailSent,setEmailSent]=useState(false);
  const [email,setEmail]=useState("");
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent));
  }

  return (
    <div className='w-[370px] text-center m-auto'>
        {loading ? (
<<<<<<< HEAD
            <div className='spinner'></div>
=======
            <div className='spinner'>Loading.....</div>
>>>>>>> bdbf826 (ProfileDropDown code)
        ) : (
            <div className='flex flex-col text-start p-15'>
                <h1 className='text-richblack-5'>
                    {!emailSent ? "Reset your password" : "Check your email"}
                </h1>
                <p className='text-richblack-400 mt-3'>
                    {!emailSent ? 
                    `Have no fear. We'll email you instructions to reset your password. If you 
                    don't have access to youe email we can try account recovery` :
                    `We have sent the reset email to ${email}`}
                </p>
                <form onSubmit={handleSubmit}
                className='mt-6 flex w-full flex-col gap-y-4'>
                    {!emailSent &&  (
                        <div>
                        <label htmlFor='email'> 
                        <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Email Address<sup className='text-pink-500'>*</sup></p>
                        <input 
                        required
                        type="text"
                        value={email}
                        name="email"
                        id="email"
                        placeholder='Enter your email'
                        onChange={(e)=>setEmail(e.target.value)}
                        style={{
                            boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
                        }}
                        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-r'/>
                    </label>
                    </div>
                    )}
                    <button type='submit' 
                    className='bg-yellow-50 mt-5 rounded-[8px] py-[8px] px-[12px] text-richblack-900 font-medium'>
                        {!emailSent ? "Reset Password" : "Reset Email"}
                    </button>
                </form >
                <div>
                    <Link to="/login" className='text-richblack-5 flex gap-x-2 items-center mt-4'>
                        <IoIosArrowRoundBack />
                        <p>Back to login</p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default ForgotPassword
