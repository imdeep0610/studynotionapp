import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {

    const {token}=useSelector((state)=>state.auth);
    const [courses,setCourses]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        
    })
  return (
    <div>
      
    </div>
  )
}

export default MyCourses
