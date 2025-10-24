import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const {user}=useSelector((state)=>state.profile);
    const navigate=useNavigate();

  return (
    <div>
       <h1 className='text-richblack-5'>My Profile</h1>
       <div>
        <div>
            <img/>
            <div>
                <p></p>
                 <p></p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default MyProfile
