import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead ,Tr,Th,Td, Tbody} from 'react-super-responsive-table';

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
                    <Tr key={course._id} className='flex '>
                       <Td>
                          <img
                          src={course?.thumbnail}
                          alt="Course Thumbnail"
                          className='h-[150px] w-[220px]'/>
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
