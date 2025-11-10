import React, { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/api';
import { getCatalogPageData } from '../services/operations/pageAndComponentData';

const Catalog = () => {

    const {catalogName}=useParams();
    const [catalogPageData,setCatalogPageData]=useState(null);
    const [categoryId,setCategoryId]=useState("");

    //Fetch all categories
    useEffect(()=>{
     const getCategoryDetails=async()=>{
         const response=await apiConnector("GET",categories.CATEGORIES_API);
         const category_id=
          response?.data?.data?.filter((ct)=>ct.name.split(" ").join("-").toLowerCase()===catalogName)[0]._id;
          setCategoryId(category_id);
     }
    },[catalogName])

    useEffect(()=>{
        const getCategoryDetails=async()=>{
          try{
             const response=await getCatalogPageData(categoryId);
             setCatalogPageData(response);
          }
          catch(error){
            console.error(error.message);
          }
        }
         getCategoryDetails();
    },[])

  return (
    <div>
       <div>
          <p>{`HOME / Catalog`}</p>
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
