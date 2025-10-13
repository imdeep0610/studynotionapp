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
    })
  return (
    <div>
      
    </div>
  )
}

export default ContactUsForm
