import React, { useState } from 'react';
import '../index.css';
import { useSelector } from 'react-redux';

const UpdatePassword = () => {
    const {loading}=useSelector((state)=>state.auth)
    const [formData,setFormData]=useState({
       newPassword:'',
       confirmPassword:'',
    })
    const [showPassword,setShowPassword]=useState(false)
  return (
    <div className='w-[370px] m-auto text-center'>
      {loading ? (
        <div className='spinner'></div>
      ) : (
        <div className='flex flex-col text-start p-15'>
            <h1 className='text-richblack-5'>Choose new password</h1>
            <p className='text-richblack-400 mt-3'>Almost done.Enter your new password and you are done</p>
            <form>
                <label htmlFor='newPassword'>
                    <p className=''>
                        New Password<sup className='text-pink-400'>*</sup>
                    </p>
                    <input required
                    type={showPassword ? 'text' : 'password'}
                    name='newPassword'
                    id='newPassword'
                    value={formData.newPassword}
                    placeholder='Enter your password'
                    onChange={}/>
                </label>
            </form>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword
