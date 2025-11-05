import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead } from 'react-super-responsive-table';

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
                <Th></Th>
            </Tr>
         </Thead>
       </Table>
    </div>
  )
}

export default CourseTable
