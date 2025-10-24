import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {

    const {token}=useSelector((state)=>state.auth);

    if(token!==null)
       return Children;
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
