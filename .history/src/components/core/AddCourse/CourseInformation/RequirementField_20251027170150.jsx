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
        <div>
        <input
        type='text'
        id={name}
        value={requirement}
        onChange={(e)=>setRequirement(e.target.value)}
        className='w-full'/>
        <button
        type='button'
        onClick={handleAddRequirement}
        className='font-semibold text-yellow-50'>
           Add
        </button>
        </div>
        {
        requirementList.length>0 && (
        <ul>
            {
                requirementList.map((item,index)=>(
                    <li key={index}>
                      <span>{requirement}</span> 
                      <button>
                        Remove
                    </button>
                    </li>
                ))
            }
        </ul>
        )
    }
    </div>
  )
}

export default RequirementField
