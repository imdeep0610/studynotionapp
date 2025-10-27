import React, { useState } from 'react'

const RequirementField = ({name,label,register,errors,setValue,getValue}) => {

    const [requirement,setRequirement]=useState("");
    const [requirementList,setRequirementList]=useState([]);

    const handleAddRequirement=()=>{
       if(requirement){
         setRequirementList([...requirementList,requirement]);
         setRequirement("");
       }
    }
    const handleRemoveRequirement=(index)=>{
        const updatedRequirementList=[...requirementList];
        updatedRequirementList.splice(index,1);
        setRequirementList(updatedRequirementList);
    }
  return (
    <div>
        <label htmlFor={name}>{label}<sup className='text-pink-400'>*</sup></label>
        <input
        type='text'
        id={name}
        />
    </div>
  )
}

export default RequirementField
