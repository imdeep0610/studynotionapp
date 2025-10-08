import React, { useState } from 'react';
import '../index.css';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { resetPassword } from '../services/operations/authAPI';

const UpdatePassword = () => {
    const dispatch=useDispatch();
    const location=useLocation();
    const {loading}=useSelector((state)=>state.auth)
    const [formData,setFormData]=useState({
       password:'',
       confirmPassword:'',
    })
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    
    const {password,confirmPassword}=formData;

    const handleChange=(e)=>{
      setFormData((prev)=>(
        {
          ...prev,
          [e.taregt.name]:e.taregt.value
        }
      ))
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      //this token is the alst part of the link sedn on email for password change
      //this -1 will give me the rightmost or last part and it get divided on the basis of /
      const token=location.pathname.split('/').at(-1)
      dispatch(resetPassword(password,confirmPassword,token));
    }

  return (
    <div className='w-[370px] m-auto text-center'>
      {loading ? (
        <div className='spinner'></div>
      ) : (
        <div className='flex flex-col text-start p-15'>
            <h1 className='text-richblack-5'>Choose new password</h1>
            <p className='text-richblack-400 mt-3'>Almost done.Enter your new password and you are done</p>
            <form onSubmit={handleSubmit}
              className='fkex flex-col mt-6 gap-y-4 w-full'>
                <label htmlFor='password'>
                    <p className='mb-1 text-[0.875rem] text-richblack-5 leading-[1.375rem]'>
                        New Password<sup className='text-pink-400'>*</sup>
                    </p>
                    <input required
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    id='password'
                    value={formData.password}
                    placeholder='Enter your password'
                    onChange={handleChange}
                    onClick={()=>setShowPassword((prev)=>!prev)}
                    style={{
                            boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
                        }}
                        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-r'/>
                    <span>
                       {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                       ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                       )}
                    </span>
                </label>
                <label htmlFor='confirmPassword'>
                   <p className='mb-1 text-[0.875rem] text-richblack-5 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-400'>*</sup>
                   </p>
                   <input
                   required
                   type={showConfirmPassword ? "text" : "password"}
                   name='confirmPassword'
                   value={confirmPassword}
                   id='confirmPassword'
                   placeholder='Re-enter your password'
                   onChange={handleChange}
                   onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                   style={{
                            boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
                        }}
                        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-r'/>
                   <span>
                    {
                      showConfirmPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                       ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                       )}
                   </span>
                </label>
                <button type='submit' 
                  className='bg-yellow-50 text-richblack-900 mt-5 rounded-[8px] 
                             font-medium py-[8px] px-[12px]'>
                  Reset Password
                </button>
            </form>
            <div>
              <Link to="/" className='text-richblack-5 flex gap-x-2 items-center mt-4'>
                 <IoIosArrowRoundBack/>
                 <p>Back to login</p>
              </Link>
            </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword
