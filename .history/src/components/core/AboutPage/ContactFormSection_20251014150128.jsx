import React from 'react';
import ContactUsForm from '../../ContactPage/ContactUsForm';


const ContactFormSection = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-richblack-5 text-4xl font-semibold'>Get in Touch</h1>
          <p className='text-richblack-300'>We'd love to here for you,please fill out this form</p>
          <ContactUsForm/>
    </div>
  )
}

export default ContactFormSection
