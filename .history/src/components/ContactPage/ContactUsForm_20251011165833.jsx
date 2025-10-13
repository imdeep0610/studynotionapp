import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const ContactUsForm = () => {

    const [loading,setLoading]=useState(false);
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    }=useForm;

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
          <div>
            <div>
             <label htmlFor='firstName'>First Name</label>
             <input
             type='text'
             id='firstName'
             placeholder='Enter First Name'
             {...register('firstName',{required:true})}
             />
             {
                errors.firstName && (
                    <span></span>
                )
             }
             </div>
          </div>
       </form>
    </div>
  )
}

export default ContactUsForm
