import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Thead ,Tr,Th,Td, Tbody} from 'react-super-responsive-table';
import { COURSE_STATUS } from '../../../../utils/constatnts';
import { IoIosTimer } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const CourseTable = ({courses,setCourses}) => {

    const dispatch=useDispatch();
    const {token}=useSelector((state)=>state.auth);
    const [loading,setLoading]=useState(false);
    const [confirmationModal,setConfirmationModal]=useState(null);

  return (
    <div>
       <Table>
         <Thead>
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
                          <button>
                            
                          </button>
                       </Td>
                    </Tr>
                ))
               )
            }
         </Tbody>
       </Table>
    </div>
  )
}

export default CourseTable
