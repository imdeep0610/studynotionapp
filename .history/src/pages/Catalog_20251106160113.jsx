import React from 'react'

const Catalog = () => {
  return (
    <div>
       <div>
          <p></p>
          <p></p>
          <p></p>
       </div>

       <div>
          {/*Section1*/}
             <div>
                <div className='flex gap-x-3'>
                   <p>Most Popular</p>
                   <p>New</p>
                </div>
                <CourseSlider/>
             </div>

          {/*Section2*/}
             <div>
               <p>Top Courses</p>
             </div>

          {/*Section3*/}
       </div>
    </div>
  )
}

export default Catalog
