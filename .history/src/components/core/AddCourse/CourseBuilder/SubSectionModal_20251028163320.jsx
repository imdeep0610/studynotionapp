import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';

const SubSectionModal = ({
    modalData,
    setModalData,
    add=false,
    view=false,
    edit=false
  }) => {

     const {register,handleSubmit,formState:{errors},setValue,getValue}=useForm();
     const dispatch=useDispatch();
     const [loading,setLoading]=useState(false);

     const {token}=useSelector((state)=>state.auth);
     const {course}=useSelector((state)=>state.course);

     useEffect(()=>{

     },[])

  return (
    <div>
      
    </div>
  )
}

export default SubSectionModal
