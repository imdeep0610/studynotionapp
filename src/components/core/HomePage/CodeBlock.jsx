import React from 'react';
import CTAButton from './Button';
import HighlightText from './HighlightText';
import { IoMdArrowRoundForward } from "react-icons/io";
import {TypeAnimation} from 'react-type-animation';

const CodeBlock = ({
    position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      {/*Section1*/}
        <div className='w-[50%] flex flex-col gap-8 rounded-md bg-gradient-to-r from-richblue-700 to-richblue-900 p-5'>
           {heading}
           <div className='text-richblack-300 font-bold'>
              {subheading}
           </div>
           <div className='flex gap-7 mt-7'>
              <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
                 <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <IoMdArrowRoundForward />
                 </div>
              </CTAButton>
              <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                    {ctabtn2.btnText}
              </CTAButton>
           </div>
        </div>

         {/*Section2*/}
         <div className='fit flex text-[20px] py-4 w-[100%] lg:w-[500px] '>
             <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
               <p>1</p>
               <p>2</p>
               <p>3</p>
               <p>4</p>
               <p>5</p>
               <p>6</p>
               <p>7</p>
               <p>8</p>
               <p>9</p>
               <p>10</p>
               <p>11</p>
               <p>12</p>
               <p>13</p>
               <p>14</p>
               <p>15</p>
             </div>
             <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono 
               ${codeColor} pr-2`}>
                <TypeAnimation
                   sequence={[codeblock,2000,""]}
                   repeat={Infinity}
                   cursor={true}
                   style={
                    {
                    whiteSpace:"pre-Line",
                    display:"block"
                    }
                   }
                   omitDeletionAnimation={true}
                />
             </div>
         </div>
    </div>
  )
}

export default CodeBlock
