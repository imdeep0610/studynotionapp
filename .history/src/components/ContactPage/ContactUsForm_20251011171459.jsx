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
          <div className='flex '>
            <div>
             <label htmlFor='firstName'>First Name</label>
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
             <div>
                <label htmlFor='email'>Email Address</label>
                <input
                type='email'
                name=/>
             </div>
          </div>
       </form>
    </div>
  )
}

export default ContactUsForm
