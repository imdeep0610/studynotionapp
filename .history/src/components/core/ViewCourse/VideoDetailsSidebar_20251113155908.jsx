import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { MdKeyboardArrowUp } from "react-icons/md";

const VideoDetailsSidebar = ({setReviewModal}) => {

    const [activeStatus,setActiveStatus]=useState("");
    const [videoBarActive,setVideoBarActive]=useState("");

    const navigate=useNavigate();
    const location=useLocation();
    const {sectionId,subSectionId}=useParams();

    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures
    }=useSelector((state)=>state.viewCourse);

    useEffect(()=>{
        ;(()=>{
           if(!courseSectionData.length)
               return;

            const currentSectionIndex=courseSectionData.findIndex(
                (data)=> data._id === sectionId
            )
            const currentSubSectionIndex=courseSectionData?.[currentSectionIndex]?.subSection
                                          .findIndex(
                                            (data)=>data._id===subSectionId
                                          )
            const activeSubSectionId=courseSectionData[currentSectionIndex]?.subSection
                                     ?.[currentSubSectionIndex]?._id;
             
            //set current section here                         
            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);

            //set current sub-section here
            setVideoBarActive(activeSubSectionId)                        
           
        })()
    },[courseSectionData,courseEntireData,location.pathname])

    //Both useEffect is doing same work n different ways
    // useEffect(()=>{
    //     const setActiveFlags=()=>{
    //         if(!courseSectionData.length)
    //            return;

    //         const currentSectionIndex=courseSectionData.findIndex(
    //             (data)=> data._id === sectionId
    //         )
    //         const currentSubSectionIndex=courseSectionData?.[currentSectionIndex]?.subSection
    //                                       .findIndex(
    //                                         (data)=>data._id===subSectionId
    //                                       )
    //         const activeSubSectionId=courseSectionData[currentSectionIndex]?.subSection
    //                                  ?.[currentSubSectionIndex]?._id;
             
    //         //set current section here                         
    //         setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);

    //         //set current sub-section here
    //         setVideoBarActive(activeSubSectionId) 
    //     }
    //     setActiveFlags();
    // },[courseSectionData,courseEntireData,location.pathname])

  return (
    <>
       <div>
            {/*For buttons and heading*/}
            <div>
                {/*For buttons*/}
                <div>
                    <div onClick={()=>{navigate("/dashboard/enrolled-courses")}}>
                        Back
                    </div>
                    <div>
                        <IconBtn
                        text="Add Review"
                        onClick={()=>setReviewModal(true)}/>
                    </div>
                </div>
                {/*For heading*/}
                <div>
                    <p>{courseEntireData?.courseName}</p>
                    <p>{completedLectures?.length}/{totalNoOfLectures}</p>
                </div>
            </div>

            {/*For section and sub-section*/}
            <div>
                {
                    courseSectionData.map((section,index)=>(
                      <div key={index} onClick={()=>setActiveStatus(section._id)}>
                         {/*Section part*/}
                         <div>
                            <div className='flex justify-around'>
                                {section?.sectionName}
                                <MdKeyboardArrowUp />
                            </div>
                            {/*Handle rotate logic of 180 degree*/}
                         </div>

                         {/*Sub-section part*/}
                         <div>
                            {
                                activeStatus===section?._id && (
                                    <div>
                                        {
                                            section.subSection.map((topic,index)=>{
                                                <div key={index}
                                                className={`flex gap-3 p-3 
                                                ${}`}>
                                                    <input
                                                    type='checkbox'
                                                    checked={completedLectures.includes(topic._id)}
                                                    onChange={()=>{}}/>
                                                    <span>{topic.title}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                )
                            }
                         </div>
                      </div>
                    ))
                }
            </div>
       </div>
    </>
  )
}

export default VideoDetailsSidebar
