import React from 'react';
import HighlightText from '../components/core/HomePage/HighlightText';
import BannerImage1 from '../assets/Images/aboutus1.webp';
import BannerImage2 from '../assets/Images/aboutus2.webp';
import BannerImage3 from '../assets/Images/aboutus3.webp';
import Quote from '../components/core/AboutPage/Quote';
import FoundingStory from '../assets/Images/FoundingStory.png';
import StatsComponent from '../components/core/AboutPage/StatsComponent';
import LearningGrid from '../components/core/AboutPage/LearningGrid';
import Footer from '../components/common/Footer';

const About = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto'>
      {/*Section1*/}
      <section>
        <div className='mx-auto flex flex-col justify-center items-center'>
            <header className='mt-16 relative bg-richblack-800 w-[1100px] h-[500px] mx-auto text-richblack-5 justify-center text-center items-center'>
                <div className='text-3xl px-10 mt-16 font-bold w-[700px] mx-auto'>Driving Innovation in online education for a
                <HighlightText text={"Brighter Future"}/>
                </div>
                <p className='text-richblack-200 w-[900px] px-20 mt-5 mx-auto'>
                    StudyNotion is at the forefront of driving innovation in online education.
                    We're passionate about creating a brighter future by offering cutting-edge
                    courses, leveraging emerging technologies, and nuturing a vibrant 
                    learning community.
                </p>
            </header>
            <div className='flex gap-x-5 w-[300px] mb-16 absolute top-[440px] transform -translate-x-80'>
                <img src={BannerImage1} alt='Bannner Image1'/>
                <img src={BannerImage2} alt='Bannner Image2'/>
                <img src={BannerImage3} alt='Bannner Image3'/>
            </div>
        </div>
      </section>

      {/*Section2*/}
        <section>
            <Quote/>
        </section>

      {/*Section3*/}
      <section>
        <div className='flex flex-col gap-y-10 mt-10'>
            {/*Upper box*/}
            <div className='flex gap-x-5 w-full px-12 py-5 justify-between items-center mx-auto'>
                {/*Founding Story Left box*/}
                <div className='flex flex-col text-white w-[50%] p-10 items-center justify-between mx-suto'>
                    <h1 className='bg-gradient-to-r text-3xl from-pink-300 to-richblue-200 text-transparent
                    bg-clip-text drop-shadow-md mb-5'>Our Founding Story</h1>
                    <p className='text-richblack-200 w-[60%] mb-5'>
                        Our e-learning platform was born out of a shared vision and passion
                        for transforming education.It all begin with a group of educators , 
                        technologists ,and lifelong learners who recognized the need for accessible,
                        flexible and high-quality learning opportunities in a rapidly evolving 
                        digital world.
                    </p>
                    <p className='text-richblack-200 w-[60%]'>
                      As experienced educators ourselves, we witnessed firsthand the limitation and 
                      challenges of traditional educational systems. We believed that education should 
                      not be confined to the walls of classroom or restricted by geographical 
                      boundaries. We envisioned a platform that could bridge these gaps and empower
                      individuals from all walks of life to unlock their full potential.
                    </p>
                </div>
                <div className='w-[40%] flex mx-auto items-center justify-center'>
                  {/*Founding Story Right box*/}
                   <img src={FoundingStory} alt='FoundingStoryImage '/>
                </div>
            </div>

            {/*Lower box*/}
            <div className='flex justify-center items-center mx-auto w-full px-12'>
              {/*Left box*/}
               <div className='flex flex-col  '>
                  <h1 className='bg-gradient-to-r text-3xl from-pink-300 to-richblue-200 text-transparent
                    bg-clip-text drop-shadow-md mb-5'>
                    Our Vision
                  </h1>
                  
                  <p className='text-richblack-200 w-[70%] '>
                    With this vision in mind, we set out on a journey to create an 
                    e-learning platform that would revolutionize the way people learn.
                    Our team of dedicated experts worked tirelessely to develop a robust
                    and intuitive platform that combines cutting-edge technology with 
                    engaging content, fostering a dynamic and interactive learning experience.
                  </p>
               </div>

               {/*Left box*/}
               <div >
                  <h1 className='bg-gradient-to-r text-3xl from-pink-300 to-richblue-200 text-transparent
                    bg-clip-text drop-shadow-md mb-5'>
                    Our Mission
                  </h1>
                  <p className='text-richblack-200 w-[60%]'>
                    Our mission goes beyond just delivering courses online.We wanted to create a 
                    vibrant community of learners, where individuals can connect,collaborate, and 
                    learn from one another.We believe that knowledge thrives in an environment
                    of sharing and dialouge, and we foster this spirit of collaboration through forums
                    ,live sessions , and networking opportunities.
                  </p>
               </div>
            </div>
        </div>
      </section>

      {/*Section4*/}
      <section>
        <StatsComponent/>
      </section>
   
      {/*Section5*/}
      <section>
         <LearningGrid/>
      </section>

      {/*Section6*/}
      <section></section>

      {/*Section7*/}
      <section>
         <div>
          <Footer/>
         </div>
      </section>

    </div>
  )
}

export default About
