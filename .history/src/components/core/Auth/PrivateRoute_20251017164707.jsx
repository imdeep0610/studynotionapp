import React from 'react'
import { useSelector } from 'react-redux'

  const PrivateRoute = ({children}) => {

    const {token}=useSelector((state)=>state.auth);

    if(token!==null){
       return children;
    }
    else{
        return </>
    }
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
