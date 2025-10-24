import React from 'react';
import {sidebarLinks} from '../../../data/dashboard-links';
import {logout} from '../../../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import SidebarLink from './SidebarLink';
import {logout} from '../../../services/operations/authAPI';

const Sidebar = () => {
  
    const dispatch=useDispatch();
    const {user,loading:profileLoading}=useSelector((state)=>state.profile);
    const {loading:authLoading}=useSelector((state)=>state.auth);
    if(profileLoading || authLoading){
         return (
        <div className='spinner'></div>
        )
    }

  return (
    <div>
       <div className='flex min-w-[222px] flex-col border-r-[1px] border-richblack-700
       h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>
           <div className='flex flex-col'>
               {sidebarLinks.map((link,index)=>{
                /*means if link.type exist and but not matches with profileaccountType , 
                then dont render anything , if its matched then render the sidebar link*/
                 if(link.type && user?.accountType!==link.type)
                   return null;
                 
                return(
                    <SidebarLink link={link} iconName={link.icon} key={link.id}/>
                )
                 })}
           </div>
           {/* For horizontal line*/}
           <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600'></div>
           <div className='flex flex-col'>
               <SidebarLink link={{name:"Settings",path:"dashboard/settings"}} 
               iconName="VscSettingsGear"/>
               <button onClick={()=>{
                  text1:'Are You Sure?'
                  text2:"You will be logged out of your account"
                  btn1Text:"Logout"
                  btn2Text:"Cancel"  
                  btn1Handler:()=>dispatch(logout)
               }}>

               </button>
           </div>
       </div>
    </div>
  )
}

export default Sidebar
