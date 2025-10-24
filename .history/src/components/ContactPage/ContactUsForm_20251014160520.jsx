import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from '../../services/apiConnector';
import {contactusEndpoints} from '../../services/api';
import countrycode from '../../data/countrycode.json';

const ContactUsForm = () => {

    const [loading,setLoading]=useState(false);
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    }=useForm();

    useEffect(()=>{
        if(isSubmitSuccessful){
           reset({
            email:"",
            firstName:"",
            lastName:"",
            message:"",
            phoneNo:""
           })
        }
    },[reset,isSubmitSuccessful])

    const submitContactForm=async(data)=>{
       console.log("Logging data : ",data)
       try{
        setLoading(true);
        const response=await apiConnector("POST",contactusEndpoints.CONTACT_US_API,data);
        console.log("LOGGING RESPONSE......",response);
        setLoading(false);
       }
       catch(error){
          console.log("ERROR......",error.message);
          setLoading(false);
       }
    }

  return (
    <div>
       <form onSubmit={handleSubmit(submitContactForm)}
       className='mt-6 flex w-full flex-col gap-y-4'>
        <div className='flex flex-col gap-y-5'>
          {/*Name*/}
          <div className='flex gap-x-5'>
            {/*First Name*/}
            <div className='flex flex-col '>
             <label htmlFor='firstName' 
             className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 '>
              First Name
            </label>
             <input
             type='text'
             name='firstName'
             id='firstName'
             placeholder='Enter First Name'
             {...register('firstName',{required:true})}
             style={{
              boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
             }}
             className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'/>
             {
                errors.firstName && (
                    <span>Please enter your first name</span>
                )
             }
             </div>
             {/*Last Name*/}
             <div>
             <label htmlFor='lastName' className='mb-1  text-[0.875rem] leading-[1.375rem] text-richblack-5'>
              Last Name
            </label>
             <input
             type='text'
             name='lastName'
             id='lastName'
             placeholder='Enter Last Name'
             {...register('lastName')}
             style={{
              boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
             }}
             className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'/>
             </div>
          </div>
          {/*Email*/}
          <div>
              <label htmlFor='email' className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
                Email Address
              </label>
              <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              {...register("email",{required:true})}
              style={{
              boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
             }}
             className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'/>
              {
                errors.email && (
                    <span>Please enter your email address</span>
                )
              }
          </div>
          {/*Phone*/}
          <div className='flex flex-col'>
             <label htmlFor='phone'>Phone Number</label>
             <div className='flex gap-x-4'> 
               <select name='phone'
               id='phone'
               {...register("phone",{required:true})}>
                 {}
               </select>
             </div>
          </div>
          {/*Message*/}
          <div>
            <label htmlFor='message'  className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
              Messsage
            </label>
            <textarea
            name='message'
            id='message'
            cols="30"
            rows="7"
            placeholder='Enter your message'
            {...register("message",{required:true})}
            style={{
              boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
             }}
             className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'/>
            {
                errors.message && (
                    <span>Please enter a message</span>
                )
            }
          </div>
          <button type='submit' className='bg-yellow-50 rounded-[8px] mt-5 py-[8px] px-[12px] font-bold'>
            Send Message
          </button>
          </div>
       </form>
    </div>
  )
}

export default ContactUsForm
