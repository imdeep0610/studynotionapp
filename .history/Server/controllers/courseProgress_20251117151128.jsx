const SubSection=require("../models/SubSection");


exports.updateCourseProgress=async(req,res)=>{
    const {courseId,subSectionId}=req.body;
    const {userId}=req.user.id;

    try{
       //check if the subSection is valid or not
       const subSection=await SubSection.findById(subSectionId);

       if(!subSection){
         return res.status(400).json({
            success:false,
            message:"Invalid sub-section"
         })
       }
    }
    catch(error){

    }
}