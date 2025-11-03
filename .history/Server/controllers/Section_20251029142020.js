const Section =require('../models/Section');
const Course =require('../models/Course');

exports.createSection=async(req , res)=>{
   try{
      //data fetch
      const {sectionName,courseId}=req.body;

      //validation
      if(!sectionName || !courseId){
        return res.status(400).json({
            success:false,
            message:'Missing properties'
        })
      }

      //create section
      const newSection=await Section.create({sectionName})

      //update course with section objectId 
      const updatedCourseDetails=await Course.findByIdAndUpdate(
                                                          courseId,
                                                          {
                                                            $push:{
                                                                courseContent:newSection._id
                                                            }
                                                          },
                                                          {new:true}
                                                        ).populate(
                                                            {
                                                                path:'courseContent',
                                                                populate:
                                                                    {
                                                                        path:'subSection'
                                                                    }
                                                            }
                                                        )

      //return response
      return res.status(200).json({
        success:true,
        message:'Section is created successfully',
        data:updatedCourseDetails
      })
   }
   catch(error){
       console.log(error);
       return res.status(500).json({
        success:false,
        message:"Internal server error",
        error:error.message
       })
   }
}

exports.updateSection=async(req,res)=>{
    try{
       //data input
       const {sectionName,sectionId}=req.body;

       //data validation
       if(!sectionName || !sectionId){
         return res.status(400).json({
            success:false,
            message:'Missing properties'
        })
       }

    
       //update data
       const section=await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true})

       //return response
       return res.status(200).json({
        success:true,
        message:'Section is updated successfully',
      })

    }
    catch(error){
         console.log(error);
       return res.status(500).json({
        success:false,
        message:'Unable to update section , please try again',
        error:error.message
       })
    }
}


exports.deleteSection=async()=>{
    try{
         //get id - assuming we are sending id in params
         const {sectionId}=req.params;

         //use findByIdAndDelete
         await Section.findByIdAndDelete(sectionId);

         //return response
         return res.status(200).json({
            success:true,
            message:'Section is deleted successfully'
         })

    }
    catch(error){
         console.log(error);
          return res.status(500).json({
        success:false,
        message:'Unable to delete section , please try again',
        error:error.message
       })
    }
}