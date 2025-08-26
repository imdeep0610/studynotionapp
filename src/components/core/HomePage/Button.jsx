import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (
    <div>
       <Link to={linkto}>
           <div className={`text-[18px]  text-center rounded-md font-bold px-6 py-3
            ${active ? "bg-yellow-50 text-black" : "bg-richblack-800 text-white"}
            hover:scale-95 transition-all duration-200`}>
            {children}
            </div>
       </Link>
    </div>
  )
}

export default Button
