import React from 'react';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';

const Catalog = () => {

    const {catalogName}=useParams();
    const []

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
               <div>
                 <CourseSlider/>
               </div>
             </div>

          {/*Section3*/}
          <div>
             <p>Frequently Bought Together</p>
          </div>
       </div>
        <Footer/>
    </div>
  )
}

export default Catalog
