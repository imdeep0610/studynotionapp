import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

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

    }

  return (
    <div>
       <form onSubmit={handleSubmit(submitContactForm)}>
        <div className='flex flex-col'>
          <div className='flex '>
            <div>
             <label htmlFor='firstName' className='text-richblack-50'>
              First Name
            </label>
             <input
             type='text'
             name='firstName'
             id='firstName'
             placeholder='Enter First Name'
             {...register('firstName',{required:true})}
             />
             {
                errors.firstName && (
                    <span>Please enter your first name</span>
                )
             }
             </div>
             <div>
             <label htmlFor='lastName'>Last Name</label>
             <input
             type='text'
             name='lastName'
             id='lastName'
             placeholder='Enter Last Name'
             {...register('lastName')}
             />
             </div>
          </div>
          <div>
              <label htmlFor='email'>Email Address</label>
              <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              {...register("email",{required:true})}
              />
              {
                errors.email && (
                    <span>Please enter your email address</span>
                )
              }
          </div>
          <div>
            <label htmlFor='message'>Messsage</label>
            <textarea
            name='message'
            id='message'
            cols="30"
            rows="7"
            placeholder='Enter your message'
            {...register("message",{required:true})}/>
            {
                errors.message && (
                    <span>Please enter a message</span>
                )
            }
          </div>
          <button type='submit'>Send Message</button>
          </div>
       </form>
    </div>
  )
}

export default ContactUsForm
