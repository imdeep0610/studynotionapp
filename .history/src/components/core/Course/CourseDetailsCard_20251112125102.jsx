import React from 'react'

function CourseDetailsCard({course,setConfirmationalModal,handleBuyCourse}){
    const {
        thumbnail:ThumbnailImage,
        price:CurrentPrice,
    }=course;
   return(
     <div>
        <img 
        src={ThumbnailImage}
        alt="Thumbnail Image"
        className=''/>
     </div>
   )
}
