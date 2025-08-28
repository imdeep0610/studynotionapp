import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import { PiFacebookLogoFill,PiGoogleLogoFill,PiTwitterLogoFill,PiYoutubeLogoFill } from "react-icons/pi";
import { FooterLink2 } from "../../data/footer-links";


const Footer=()=>{
  const Company=["About","Careers","Affiliates"];
  const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

   return(
     <div className="bg-richblue-800">
         <div className="w-11/12 flex flex-col items-center gap-10">
             {/*Bigger box*/}
             <div className="flex  mt-16 border-b mx-auto border-richblack-300 h-[70%]">
               {/*Left one*/}
               <div className="flex gap-20 w-[44%] justify-between">
                  <div className="flex flex-col gap-3">
                     <img src={Logo} alt='Logo' width={160} height={40} loading='lazy'/>
                     <p className='text-richblack-25 font-semibold'>Company</p>
                      {
                        Company.map((item,index)=>(
                          <Link to={item.toLowerCase()}  key={index}
                          className='text-richblack-100 font-semibold'>
                            {item}
                          </Link>
                        ))
                      }
                      <div className='flex gap-3 text-richblack-200 w-[120px] items-center'>
                        <PiFacebookLogoFill/>
                        <PiGoogleLogoFill />
                        <PiTwitterLogoFill />
                        <PiYoutubeLogoFill />
                      </div>
                  </div>
                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                     <p className='text-richblack-5 font-semibold'>Resources</p>
                     {
                      Resources.map((item,index)=>(
                        <Link to={item.toLowerCase()}  key={index} 
                        className='text-richblack-100 font-semibold gap-3'>
                           {item}
                        </Link>
                      ))
                     }
                     </div> 
                     <div className='flex flex-col gap-3'>
                       <p className='text-richblack-5 font-semibold'>Support</p>
                       <Link to={'/help-center'} 
                       className='text-richblack-100 font-semibold'>Help Center</Link>
                     </div>
                  </div>
                  <div className='flex flex-col gap-8'>
                      <div className='flex flex-col gap-3'>
                         <p className='text-richblack-5 font-semibold'>Plans</p>
                         {
                          Plans.map((item,index)=>(
                            <Link to={item.toLowerCase()}  key={index}
                            className='text-richblack-100 font-semibold'>{item}</Link>
                          ))
                         }
                      </div>
                      <div className='flex flex-col gap-3'>
                         <p className='text-richblack-5 font-semibold'>Community</p>
                         {
                          Community.map((item,index)=>(
                            <Link to={item.toLowerCase()} key={index}
                            className='text-richblack-100 font-semibold'>{item}</Link>
                          ))
                         }
                      </div>
                  </div>
               </div>

               {/*Right  one*/}
               <div className='flex gap-20 w-[44%] mx-10 justify-between'>
                     {FooterLink2.map((ele,index)=>(
                      <div className='flex flex-col gap-3'>
                       <p key={index} className='text-richblack-5 font-semibold'>
                        {ele.title}
                        </p>
                         <div>
                          {
                             ele.links.map((item,index)=>(
                               <Link to={item.link} key={index}
                               className='text-richblack-100 font-semibold gap-3 flex flex-col'>
                                 {item.title}
                               </Link>
                             ))
                          }
                         </div>
                         </div>
                     ))}
                   
                   <div></div>
                   <div></div>
               </div>
             </div>

             <div className="flex justify-between items-center w-full px-10 py-4">
               {/* Left side */}
               <div className="flex gap-6">
                    {BottomFooter.map((item, index) => (
                        <Link to={item.toLowerCase()} key={index}
                              className="text-richblack-100 font-semibold">
                              {item}
                        </Link>
                    ))}
                </div>

                {/* Right side */}
                <div className="text-richblack-100 font-semibold">
                     Made with 💖 Target Technology @ Study Notion
                </div>
            </div>
         </div>
     </div>
   )
}
export default Footer