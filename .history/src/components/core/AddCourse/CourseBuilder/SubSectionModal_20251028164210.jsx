import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-hot-toast';

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
        if(view || edit){
            setValue("lectureTitle",modalData.title);
            setValue("lectureDesc",modalData.description);
            setValue("lectureVideo",modalData.video)
        }
     },[])

     const isFormUpdated=()=>{
        const currentValues=getValue();
        if(currentValues.lectureTitle!==modalData.title ||
           currentValues.lectureDesc!==modalData.description ||
           currentValues.lectureVideo!==modalData.video
        ){
            return true
        }
        else{
            return false
        }
     }

     const handleEditSubSection=()=>{

     }

     const onSubmit=async(data)=>{
        if(view){
            return;
        }
        if(edit){
          if(!isFormUpdated){
            toast.error("No changes made to the form");
          }
          else{
            handleEditSubSection();
          }
          return;
        }

        const formData=new FormData();
        formData.append();
     }

  return (
    <div>
      
    </div>
  )
}

export default SubSectionModal
