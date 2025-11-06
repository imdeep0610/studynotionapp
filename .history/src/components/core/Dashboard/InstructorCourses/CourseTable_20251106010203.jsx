import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Thead ,Tr,Th,Td, Tbody} from 'react-super-responsive-table';
import { COURSE_STATUS } from '../../../../utils/constatnts';
import { IoIosTimer } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import ConfirmationModal from '../../../common/ConfirmationModal';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {deleteCourse, fetchInstructorCourses} from '../../../../services/operations/courseDetailsAPI';

const CourseTable = ({courses,setCourses}) => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const navigate=useNavigate();
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const [confirmationModal,setConfirmationModal]=useState(null);

    const handleCourseDelete=async(courseId)=>{
      setLoading(true);
      const response=await deleteCourse({courseId:courseId},token);
      const result=await fetchInstructorCourses(token);

      if(result){
          setCourses(result);
      }
      setConfirmationModal(null);
      setLoading(false);
    }

  return (
    <div className='text-richblack-5'>
       <Table>
         <Thead className='flex gap-x-10 border-richblack-800 p-8'>
            <Tr>
                <Th>Courses</Th>
                <Th>Duration</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
            </Tr>
         </Thead>
         <Tbody>
            {
                courses.length>0 ? 
               (
                 <Tr>
                    <Td>No Courses Found</Td>
                </Tr>
               ) : 
               (
                courses.map((course)=>(
                    <Tr key={course._id} className='flex gap-x-10 border-richblack-800 p-8'>
                       <Td className='flex gap-x-3'>
                          <img
                          src={course?.thumbnail}
                          alt="Course Thumbnail"
                          className='h-[150px] w-[220px] rounded-lg object-cover'/>
                          <div className='flex flex-col'>
                              <p>{course.courseName}</p>
                              <p>{course.courseDescription}</p>
                              <p>Created :</p>
                              {
                                course.status===COURSE_STATUS.DRAFT ? (
                                    <p className='text-pink-200'>
                                        <IoIosTimer />
                                        Drafted
                                    </p>
                                ) :
                                (
                                    <p className='text-yellow-50'>
                                        <TiTick />
                                        Published
                                    </p>
                                )
                              }
                          </div>
                       </Td>
                       <Td>2hr 30mins</Td>
                       <Td>${course.price}</Td>
                       <Td>
                          <button
                          disabled={true}
                          onClick={navigate("")}>
                             <MdModeEdit 
                             className='mr-[19px]'/>
                          </button>
                          <button
                          disabled={true}
                          onClick={()=>setConfirmationModal({
                            text1:"Do you want to delete this course?",
                            text2:"All the data related to this course will be deleted",
                            btn1Text:"Delete",
                            btn2Text:"Cancel",
                            btn1Handler: !loading ? ()=>handleCourseDelete(course._id) : ()=>{},
                            btn2Handler: !loading ? ()=>setConfirmationModal(null) : ()=>{}
                          })}>
                             <MdDelete />
                          </button>
                       </Td>
                    </Tr>
                ))
               )
            }
         </Tbody>
       </Table>
       {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default CourseTable
