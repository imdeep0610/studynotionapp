<<<<<<< HEAD
//This will prevent authenticated user from accessing this route
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({children}){
     const {token}=useSelector((state)=>state.auth);

     if(token===null){
      return children;
     }
     else{
      return <Navigate to="/dashboard/my-profile"/>
     }
}
export default OpenRoute;
=======
import React from 'react'

const OpenRoute = () => {
  return (
    <div>
      
    </div>
  )
}

export default OpenRoute
>>>>>>> bdbf826 (ProfileDropDown code)
