import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';

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
                </div>
            </div>
       </div>
    </>
  )
}

export default VideoDetailsSidebar
