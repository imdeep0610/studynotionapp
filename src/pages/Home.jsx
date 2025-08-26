import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4';
import CodeBlock from "../components/core/HomePage/CodeBlock";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home=()=>{
   return(
     <div>
        {/*Section1*/}
         <div className="relative mx-auto flex flex-col w-11/12 items-center
          justify-between text-white max-w-maxContent">
            <Link to={'signup'}>
               <div className=" group mt-16 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
               transition-all duration-200 hover:scale-95 w-fit">
                 <div className="flex items-center gap-2 rounded-full px-5 group-hover:bg-richblack-900 p-5">
                    <p>Become an Instructor</p>
                    <IoMdArrowRoundForward />
                 </div>
               </div>
            </Link>
            <div className="text-3xl font-semibold text-center mt-7">
                Empower Your Future With 
                <HighlightText text={'Coding Skills'}/>
            </div>
            <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
                With our online coding courses,you can learn at your own pace,from anywhere in the 
                world,and get access to a wealth of resources,including hands-on projects,quizzes,and
                personalized feedback from instructors.

            </div>
            <div className="flex gap-7 mt-8">
                <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>
                <CTAButton active={false} linkto={'/signup'}>Book a Demo</CTAButton>
            </div>
            <div className="shadow-top-left-richblue-400 mx-3 my-12">
                <video muted loop autoPlay className="mt-10">
                   <source src={Banner} type="video/mp4"></source>
                </video>
            </div>

            {/*Code Section1*/}
            <div>
                <div>
                     <CodeBlock 
                          position={"lg:flex-row"}
                          heading={
                           <div className="text-3xl font-semibold">Unlock Your 
                              <HighlightText text={"coding potential"} />
                              {" "}with our online courses
                           </div>
                          }
                          subheading={
                          `Our courses are designed and taught by industry experts who have years of 
                          experience in coding and are passionate about sharing their knowledge with 
                          you.`
                          }
                          ctabtn1={
                           {
                              btnText:"Try it Yourself",
                              linkto:'/signup',
                              active:true
                           }
                          }
                          ctabtn2={
                           {
                              btnText:"Learn More",
                              linkto:'/login',
                              active:false
                           }
                          }
                          codeblock={
                           `<!DOCTYPE html>
                           <html>
                           <head>
                           <title>Example</title><link rel="stylesheet" href="styles.css"/>
                           </head>
                           <body>
                           <h1><a href="/">Header</a>
                           </h1>
                           <nav><a href="one">One</a><a href="two">Two</a>
                           <a href="three">Three</a>
                           </nav>
                           </body>
                           </html>
                           `}
                           codeColor={"text-yellow-25"}
                          />
                </div>
            </div>

             {/*Code Section2*/}
            <div>
                <div>
                     <CodeBlock 
                          position={"lg:flex-row-reverse"}
                          heading={
                           <div className="text-3xl font-semibold">Start 
                              <HighlightText text={"coding in seconds"} /> 
                           </div>
                          }
                          subheading={
                          `Go ahead,give it a try. Our hands-on learning environment means you'll 
                          be writing real code from your very first lessaon `
                          }
                          ctabtn1={
                           {
                              btnText:"Continue Lesson",
                              linkto:'/signup',
                              active:true
                           }
                          }
                          ctabtn2={
                           {
                              btnText:"Learn More",
                              linkto:'/login',
                              active:false
                           }
                          }
                          codeblock={
                           `<!DOCTYPE html>
                           <html>
                           <head>
                           <title>Example</title><link rel="stylesheet" href="styles.css"/>
                           </head>
                           <body>
                           <h1><a href="/">Header</a>
                           </h1>
                           <nav><a href="one">One</a><a href="two">Two</a>
                           <a href="three">Three</a>
                           </nav>
                           </body>
                           </html>
                           `}
                           codeColor={"text-yellow-25"}
                          />
                </div>
            </div>
             <ExploreMore/>
         </div>

        {/*Section2*/}
         <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[310px]">
               <div className="w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto">
               <div className="h-[150px]"></div>
                  <div className="flex text-white gap-7">
                       <CTAButton active={true} linkto={'/signup'}>
                           <div className="flex items-center gap-2">
                              Explore Full Catalog
                              <IoMdArrowRoundForward />
                           </div>
                       </CTAButton>
                       <CTAButton active={false} linkto={'/signup'}>
                              Learn More
                       </CTAButton>
                  </div>
               </div>
            </div>
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-5">
               <div className="flex gap-5 mb-10 mt-[110px]">
                   <div className="font-semibold text-3xl w-[45%]">
                     Get the skills you need for a
                     <HighlightText text={" job that is in demand"}/>
                     </div>
                   <div className="flex flex-col w-[40%] items-start">
                       <div className="text-[16px] mb-8">
                         The modern StudyNotion dictates its own terms.Today, to be a competitive 
                         specialist requires more than professional skills.
                       </div>
                       <CTAButton active={true} linkto={'/signup'}>
                          <div>
                            Learn More
                          </div>
                       </CTAButton>
                   </div>
               </div>
            </div>
             <TimeLineSection/>
             <LearningLanguageSection/>
         </div>
        
        

        {/*Section3*/}
        <div className="w-11/12  mx-auto max-w-maxContent flex flex-col items-center
             justify-between gap-8 bg-richblack-900 text-white first-letter">
           <InstructorSection/>
           <h2 className="text-center text-3xl font-semibold mt-10">Review from Other Learners</h2>
           {/*Review Slider*/}
        </div>

        {/*Footer*/}
        <Footer/>
     </div>
   )
}
export default Home;