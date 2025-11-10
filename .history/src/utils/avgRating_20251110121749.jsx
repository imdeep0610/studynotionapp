export default function GetAvgRating(ratingArr){
   if(ratingArr?.length===0){
     return 0;
   }
   const totalReviewCount=ratingArr?.reduce((acc,curr)=>{
      acc+=curr.rating
   })
}