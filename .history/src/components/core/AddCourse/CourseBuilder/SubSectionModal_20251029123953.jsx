import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-hot-toast';
import { createSubSection, updateSubSection } from '../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../slices/courseSlice';
import { RxCross2 } from "react-icons/rx";
import { BiUpload } from 'react-icons/bi';

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

     const handleEditSubSection=async()=>{
        const currentValues=getValue();
        const formData=new FormData();

        formData.append("sectionId",modalData.sectionId);
        formData.append("subSectionId",modalData._id);

        if(currentValues.lectureTitle!==modalData.title){
           formData.append("title",currentValues.lectureTitle)
        }
         if(currentValues.lectureDesc!==modalData.description){
           formData.append("description",currentValues.lectureDesc)
        }
         if(currentValues.lectureVideo!==modalData.video){
           formData.append("video",currentValues.lectureVideo)
        }
        setLoading(true);
        //API call
        const result=await updateSubSection(formData,token);
        if(result){
          //TODO:check for updation
          dispatch(setCourse(result));
        }
        setModalData(null);
        setLoading(false);
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
        formData.append("sectionId",modalData);
        formData.append("title",data.lectureTitle);
        formData.append("description",data.lectureDesc);
        formData.append("video",data.lectureVideo);
        setLoading(true);

        //API call
        const result=await createSubSection(formData,token);

        if(result){
         //TODO: check for updation
         dispatch(setCourse(result));
        }
        setModalData(null);
        setLoading(false);
     }

  return (
    <div>
       <div>
          <div>
             <p>
                {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
             </p>
             <button onClick={()=>(!loading ? setModalData(null) : {})}>
               <RxCross2 />
             </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
             <Upload
             name="lectureVideo"
             label="Lecture Video"
             register={register}
             setValue={setValue}
             errors={errors}
             video={true}
             viewData={view ? modalData?.videoUrl : null}
             editData={edit ? modalData?.videoUrl : null}/>

             <div>
                <label htmlFor='lectureTitle'>Lecture Title</label>
                <input
                id='lectureTitle'
                placeholder='Enter yout lecture title'
                {...register("lectureTitle",{required:true})}
                className='w-full'/>
                {errors.lectureTitle && (<span>Lecture title is required</span>)}
             </div>
             <div>
              
             </div>
          </form>
       </div>
    </div>
  )
}

export default SubSectionModal
