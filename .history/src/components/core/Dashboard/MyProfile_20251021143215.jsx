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

       {/*Section1*/}
       <div>
          <div>
            <p>About</p>
            <IconBtn
            text='Edit'
            onClick={()=>{
              navigate('/dashboard/settings')
            }}/>
          </div>
          <p>{user?.additionalDetails?.about ?? "Additional Details"}</p>
       </div>
    </div>
  )
}

export default MyProfile
