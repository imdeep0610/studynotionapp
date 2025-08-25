const RatingAndReview=require('../models/RatingAndReview');
const Course=require('../models/Course');
const { default: mongoose } = require('mongoose');


//createRatingAndReviews
exports.createRating=async(req,res)=>{
    try{
         //fetched data from req body
         const {rating,review,courseId}=req.body;

         //get user id
         const userId=req.user.id;

         //check if user is enrolled or not
         const courseDetails=await Course.findOne(
                                                   {_id:courseId,
                                                    /*checking whether this user is present in
                                                      the course or not
                                                    */
                                                    studentEnrolled:{$elemMatch: {$eq:userId}}
                                                   }
                                                );
          if(!courseDetails){
              return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the course'
              })
          }                                      

         //check if user is already review or not
         const alreadyReviewed=await RatingAndReview.findOne(
                                                              {user:userId,
                                                               course:courseId
                                                            });
             if(alreadyReviewed){                                                
             return res.status(403).json({
                success:false,
                message:'Course is already reviewed'
              })
            }                                                   

         //create rating and review
         const ratingReview=await RatingAndReview.create(
                                                          {
                                                            rating,review,
                                                            course:courseId,
                                                            user:userId
                                                          }
                                                         );

         //update the course with this rating and review
         const updatedCourseDetails=await Course.findByIdAndUpdate({_id:courseId},
                                       {
                                          $push:{
                                            RatingAndReview:ratingReview._id
                                          }
                                        },
                                        {new:true}
                                      );
         console.log(updatedCourseDetails);                             

         //return response
         return res.status(200).json({
            success:true,
            message:'Rating and Review created successfully',
            ratingReview
         })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


//averageRatingAnd Reviews
exports.getAverageRating=async(req , res)=>{
   try{
        //get the course id
        const courseId=req.body.courseid;

        //calculate average rating
        const result=await RatingAndReview.aggregate([
              {
                //here we find all the entries whose courseid === to give courseId
                $match:{
                    course:new mongoose.Types.ObjectId(courseId)
                },
              },
              {
                    $group:{
                        _id:null,
                        averageRating:{$avg:'$rating'}
                    }
                 }
        ]);

        //return rating
        if(result.length>0){
           return res.status(200).json({
            success:true,
            averageRating:result[0].averageRating,
           })
        }

        //if no rating exist
        else{
             return res.status(200).json({
               success:true,
               message:'Average rating is 0 , no ratings given till now';
               averageRating:0
             })
        }
   }
   catch(error){
      console.log(error);
      return res.status(500).json({
            success:false,
            message:error.message
        })
   }   
}

//getAllRatingAndReviews
exports.getAllRating=async(req,res)=>{
   try{
       const allReviews=await RatingAndReview.find({})
                                               .sort({rating:'desc'})
                                               .populate({
                                                  path:"user",
                                                  select:"firstName lastName email image"
                                               })
                                               .populate({
                                                 path:'course',
                                                 select:'courseName'
                                               })
                                               .exec();

        //return response
        return res.status(200).json({
            success:true,
            message:'All reviews fetched',
            data:allReviews
        })                                     
   }
   catch(error){
       console.log(error);
      return res.status(500).json({
            success:false,
            message:error.message
        })
   }
}