import React,{useState} from 'react';
import { AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai";
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
  
  const [showPassword,setShowPassword]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();

   const [formData,setFormData]=useState({
    email:"",
    password:""
   }) 
  
   const handleChange=(e)=>{
      setFormData((prevData)=>(
        {
        ...prevData,
       [e.target.name]:e.target.value
        }
      ))
   }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(formData.email,formData.password,navigate);
   }

  return (
    <div>
       <form onSubmit={handleSubmit}
             className='mt-6 flex w-full flex-col gap-y-4'>
          <label htmlFor='email'>
             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
               Email Address<sup className='text-pink-500'>*</sup>
             </p>
             <input 
             required
             type="email"
             id="email"
             value={formData.email}
             placeholder='Enter your email address'
             onChange={handleChange}
             style={{
              boxShadow:"inset 0px -1px 0px rgba(255 255 255 0.18)"
             }}
             className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5'/>
          </label>
          <label htmlFor='password' className='relative'>
             <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
               Password<sup className='text-pink-500'>*</sup>
             </p>
             <input 
             required
             type="password"
             id="password"
             value={formData.password}
             placeholder='Enter your password'
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
             }}
             className='w-full rounded-[0.5rem] p-[12px] bg-richblack-800 text-richblack-5'/>
             <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] z-10 cursor-pointer'>
                 {showPassword ? 
                 (
                   <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>
                 ) : 
                 (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                 )}
             </span>
             <Link to='/forgot-password'>
               <p className='text-blue-100 mt-1 ml-auto text-xs max-w-max'>Forgot Password</p>
             </Link>
          </label>
          <button type='submit' className='mt-6 rounded-[8px] py-[8px] px-[12px] text-richblack-900 bg-yellow-50 font-medium'>
            Sign In
          </button>
       </form>
    </div>
  )
}

export default LoginForm
