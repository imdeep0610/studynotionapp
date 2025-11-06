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
    const [loading,setLoading]=useState(false);
    const location=useLocation();

    const matchRoute=(route)=>{
       return matchPath({path:route},location.pathname) 
    }

    useEffect(()=>{
      ;(async()=>{ 
         setLoading(true);
         try{
              const response=await apiConnector("GET",categories.CATEGORIES_API);
              setSubLinks(response.data.data);
         }
         catch(error){
             console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
      })()
    },[])

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
                                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                                            {loading ? (
                                                              <p className="text-center">Loading...</p>
                                                            ) : subLinks.length ? (
                                                              <>
                                                                {subLinks
                                                                  ?.filter(
                                                                    (subLink) => subLink?.courses?.length > 0
                                                                  )
                                                                  ?.map((subLink, i) => (
                                                                    <Link
                                                                      to={`/catalog/${subLink.name
                                                                        .split(" ")
                                                                        .join("-")
                                                                        .toLowerCase()}`}
                                                                      className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                                      key={i}
                                                                    >
                                                                      <p>{subLink.name}</p>
                                                                    </Link>
                                                                  ))}
                                                              </>
                                                            ) : (
                                                              <p className="text-center">No Courses Found</p>
                                                            )}
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
