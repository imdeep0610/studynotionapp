import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

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

  return (
    <div>
      
    </div>
  )
}

export default SubSectionModal
