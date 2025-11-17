const SubSection=require("../models/SubSection");
const CourseProgress=require("../models/CourseProgress");

exports.updateCourseProgress=async(req,res)=>{
    const {courseId,subSectionId}=req.body;
    const {userId}=req.user.id;

    try{
       //check if the subSection is valid or not
       const subSection=await SubSection.findById(subSectionId);

       if(!subSection){
         return res.status(404).json({
            success:false,
            message:"Invalid sub-section"
         })
       }

       //check for old entry
       let courseProgress=await CourseProgress.findOne({
        courseId:courseId,
        userId:userId
       });

       if(!courseProgress){
          return res.status(404).json({
            success:false,
            message:"Course progress does not exist"
          })
       }
       else{
        //check for re-completing video/sub-section
        if(courseProgress.completedVideos.includes(subSectionId)){
           return res.status(400).json({
             success:false,
             message:"Subsection is already completed"
           })
        }
        //if its not completed earlier , push it to completed

       }

    }
    catch(error){

    }
}