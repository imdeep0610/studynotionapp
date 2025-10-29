import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";

const NestedView = ({handleChangeEditSectionName}) => {

    const {course}=useSelector((state)=>state.course);
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    const [addSubSection,setAddSubSection]=useState(null);
    const [viewSubSection,setViewSubSection]=useState(null);
    const [editSubSection,setEditSubSection]=useState(null);

    const [confirmationalModal,setConfirmationalModal]=useState(null);

    const handleDeleteSection=(sectionId)=>{

    }

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
                            <button onClick={handleChangeEditSectionName(section._id,section.sectionName)}>
                                <MdModeEdit />
                            </button>

                            <button onClick={()=>{
                                setConfirmationalModal({
                                    text1:"Delete this section",
                                    text2:"All the lectures in this section will be deleted",
                                    btn1Text:"Delete",
                                    btn2Text:"Cancel",
                                    btn1Handler:()=>handleDeleteSection(section._id),
                                    btn2Handler:()=>setConfirmationalModal(null)
                                })
                            }}>
                                <MdDelete />
                            </button>
                            <span>|</span>
                            <BiSolidDownArrow className={`text-xl text-richblack-300`}/>
                        </div>
                    </summary>

                    <div>
                        {
                            section.subSection.map((data)=>(
                                 <div key={data?.id}
                                 onClick={()=>setViewSubSection(data)}
                                 className='flex justify-between border-b-2 gap-x-3 items-center'>
                                    <div>
                                        
                                    </div>
                                 </div>
                            ))
                        }
                    </div>

                </details>
            ))
          }
       </div>
    </div>
  )
}

export default NestedView
