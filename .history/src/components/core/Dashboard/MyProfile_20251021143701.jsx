import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';

const MyProfile = () => {
    const {user}=useSelector((state)=>state.profile);
    const navigate=useNavigate();

  return (
    <div className='text-white'>
       <h1 className='text-richblack-5'>My Profile</h1>
       {/*Section1*/}
       <div>
        <div>
            <img src={user?.image} alt={`profile=${user?.firstName}`}
            className='aspect-square w-[78px] rounded-full object-cover'/>
            <div>
                <p>{user?.firstName + " " + user?.lastName}</p>
                <p>{user?.email}</p>
            </div>
        </div>
        <IconBtn
        text='Edit'
        onClick={()=>{
            navigate("/dashboard/settings")
        }}/>
       </div>

       {/*Section2*/}
       <div>
          <div>
            <p>About</p>
            <IconBtn
            text='Edit'
            onClick={()=>{
              navigate('/dashboard/settings')
            }}/>
          </div>
          <p>{user?.additionalDetails?.about ?? "Write something about yourself"}</p>
       </div>

       {/*Section2*/}
       <div>
         <div>
          <p>Personal Details</p>
          <IconBtn
            text='Edit'
            onClick={()=>{
              navigate('/dashboard/settings')
            }}/>
         </div>
         <div>
           <div>
            <p>First Name</p>
            <p>{user?.firstName}</p>
           </div>
           <div>
            <p>Email Address</p>
            <p>{user?.email}</p>
           </div>
            <div>
            <p>Gender</p>
            <p>{user?.gender}</p>
           </div>
         </div>
       </div>
    </div>
  )
}

export default MyProfile
