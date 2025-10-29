import React from 'react'
import { useForm } from 'react-hook-form'

const SubSectionModal = ({
    modalData,
    setModalData,
    add=false,
    view=false,
    edit=false
  }) => {

     const {register,handleSubmit,formState:{errors},setValue,getVlaue}=useForm

  return (
    <div>
      
    </div>
  )
}

export default SubSectionModal
