import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ContactUsForm = () => {

    const [loading,setLoading]=useState(false);
    const{
        register,
        handleSubmit,
        reset,
        
    }=useForm
  return (
    <div>
      
    </div>
  )
}

export default ContactUsForm
