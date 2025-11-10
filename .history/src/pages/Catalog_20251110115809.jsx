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
          <p>{`HOME / Catalog`}<span>{catalogPageData?.data?.selectedCategory?.name}</span></p>
          <p>{catalogPageData?.data?.selectedCategory?.name}</p>
          <p>{catalogPageData?.data?.selectedCategory?.description}</p>
       </div>

       <div>
          {/*Section1*/}
             <div>
               <div>Courses to get you started</div>
                <div className='flex gap-x-3'>
                   <p>Most Popular</p>
                   <p>New</p>
                </div>
                <div>
                   <CourseSlider
                      courses={catalogPageData?.data?.selectedCategory?.courses}/>
                </div>
             </div>


          {/*Section2*/}
             <div>
               <p>Top Courses in {catalogPageData?.data?.selectedCategory?.name}</p> 
               <div>
                 <CourseSlider
                    courses={catalogPageData?.data?.differentCategory?.courses}/>
               </div>
             </div>

          {/*Section3*/}
          <div>
             <div>Frequently Bought</div>
             <div className='py-8'>
                 <div className='grid grid-cols-1 lg:grid-cols-2'>
                     {
                        catalogPageData?.data?.mostSellingCourses?.slice(0,4)
                     }
                 </div>
             </div>
          </div>
       </div>
        <Footer/>
    </div>
  )
}

export default Catalog
