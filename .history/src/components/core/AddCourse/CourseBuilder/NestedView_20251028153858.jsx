import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";

const NestedView = ({handleChangeEditSectionName}) => {

    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    const [addSubSection,setAddSubSection]=useState(null);
    const [viewSubSection,setViewSubSection]=useState(null);
    const [editSubSection,setEditSubSection]=useState(null);

    const [confirmationalModal,setConfirmationalModal]=useState(null);

  return (
    <div>
       <div className='rounded-lg bg-richblack-700 py-6 px-8'>
          {
            course.courseContent.map((section)=>(
                <details key={section._id} open>
                    <summary className='flex items-center justify-between gap-x-3 border-b-2'>
                        <div className='flex items-center gap-x-3'>
                            <RxDropdownMenu />
                            <p>{section.sectionName}</p>
                        </div>
                        <div className='flex gap-x-3 items-center'>
                            <button onClick={handleChangeEditSectionName(section._id,sectionName)}>
                                <MdModeEdit />
                            </button>
                        </div>
                    </summary>
                </details>
            ))
          }
       </div>
    </div>
  )
}

export default NestedView
