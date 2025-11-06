import React, { useState,useEffect } from 'react';
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import { Link,matchPath,useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/navbar-links';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/api';
import { IoIosArrowDown } from "react-icons/io";


  

const Navbar = () => {
 
    const {token} =useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItems}=useSelector((state)=>state.cart);
    const [subLinks,setSubLinks]=useState([]);
    const location=useLocation();
    const matchRoute=(route)=>{
       return matchPath({path:route},location.pathname) 
    }

    // const fetchSubLinks=async()=>{
    //         try{
    //             const result=await apiConnector("GET",categories.CATEGORIES_API);
    //             console.log('Printing SubLinks result :',result);
    //            // setSubLinks(result);
    //         }
    //         catch(error){
    //             console.log("Could not fetch categories list")
    //         }
    //     }

    // //const [subLinks,setSubLinks]=useState([]);
    // useEffect(()=>{
    //     fetchSubLinks();
    // },[])


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
       <div className='w-11/12 max-w-maxContent flex items-center justify-between'>
          {/*Logo Image*/}
           <Link to='/'>
               <img src={Logo} alt='Logo' width={160} height={40} loading='lazy'/>
           </Link>

           {/*Nav Links*/}
           <nav>
              <ul className='flex gap-x-6 text-richblack-25'>
                  {NavbarLinks.map((item,index)=>{
                     return(
                        <li key={index}>
                           {
                            item.title === 'Catalog' ? (
                                <div className='relative flex gap-1 items-center group'>
                                    <p>{item.title}</p>
                                     <IoIosArrowDown />
                                     <div className='invisible absolute left-[50%] top-[50%] flex flex-col
                                     rounded-md bg-richblack-5 p-4 text-richblue-900
                                     opacity-0 transition-all duration-200 group-hover:visible 
                                     group-hover:opacity-100 lg:w-[300px] translate-x-[-50%]
                                     translate-y-[80%]'>
                                        <div className='absolute left-[50%] top-0 h-6 w-6 
                                        rotate-45 rounded bg-richblack-5 translate-y-[-45%]
                                        translate-x-[80%]'></div>
                                        {
                                          subLinks.length ? 
                                          (
                                                subLinks.map((item,index)=>{
                                                    return(
                                                      <Link to={`${item.link}`} key={index}>
                                                         <p>{item.title}</p>
                                                      </Link>
                                                    )
                                                })
                                          ) :
                                          (
                                            <div></div>
                                          )
                                        }
                                     </div>
                                </div>
                            ) :
                             (
                                <Link to={item?.path}>
                                    <p className={`${matchRoute(item?.path) ? 
                                        "text-yellow-25" :"text-richblack-25"}`}>
                                        {item.title}
                                        </p>
                                </Link>
                            )
                           }
                        </li>
                     )
                  })}
              </ul>
           </nav>

           {/*Login/Signup dashboards*/}
           <div className='flex items-center gap-x-4'>
              {
                user && user?.accountType !== "Instructor" && (
                    <Link to='/dashboard/cart' className='relative bg-white'>
                        <IoCartOutline  />
                        {
                            totalItems > 0 && 
                            (
                                <span>{totalItems}</span>
                            )
                        }
                    </Link>
                )
              }
               {
                            token===null && 
                            (
                               <Link to='/login'>
                                  <button className='border border-richblack-700 bg-richblack-800
                                  px-[12px] py-[6px] text-richblack-100 rounded-md'>
                                    Login
                                  </button>
                               </Link> 
                            )
               }
               {
                       token===null &&
                       (
                        <Link to='/signup'>
                            <button className='border border-richblack-700 bg-richblack-800
                                  px-[12px] py-[6px] text-richblack-100 rounded-md'>
                                Signup
                            </button>
                        </Link>
                       )
               }
               {
                   token!==null && <ProfileDropDown/>
               }
           </div>
       </div>
    </div>
  )
}

export default Navbar
