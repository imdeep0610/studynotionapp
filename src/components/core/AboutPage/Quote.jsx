import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className='mt-40 text-richblack-200 text-2xl font-medium w-[750px] mx-auto text-center'>
        <span className='text-richblack-600 text-3xl font-medium'>"</span>We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighlightText text={"combines technology"}/>,
        <span className='text-brown-500'>{" "}expertise</span>,
        and community to create an 
        <span className='text-yellow-100'>{""} unparalleled educational experience.<span className='text-richblack-600 text-3xl font-medium'>"</span></span>  
    </div>
  )
}

export default Quote
