const SubSection=require('../models/SubSection');
const Section=require('../models/Section');
const { uploadImageToCloudinary } = require('../utils/imageUploader');


exports.createSubSection=async(req,res)=>{
    try{
         //fecth data
         const {sectionId,title,timeDuration,description}=req.body;

         //fecth video from file
          const video=req.files.videoFiles;

         //validate
          if(!sectionId || !title || !timeDuration || !description || !video){
              return res.status(400).json({
                success:false,
                message:'All fields are required'
              })
          }

           
         //upload video to cloudinary -- here we get secure url
        const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);


         //create subsection
         const subSectionDetails=await SubSection.create(
                                                           {
                                                            title:title,
                                                            timeDuration:timeDuration,
                                                            description:description,
                                                            videoUrl:uploadDetails.secure_url
                                                           }
                                                        )

         //update section with subsection object id
          const updatedSection=await Section.findByIdAndUpdate({_id:sectionId},
                                                               {$push:{
                                                                subSection:subSectionDetails._id
                                                               }},
                                                               {new:true}
                                                               )
         //return the response
         return res.status(200).json({
            success:true,
            message:'Sub section created successfully',
            data:updatedSection
         })
    }
    catch(error){console.log(error);
        return res.status(500).json({
          success:false,
          message:"Internal server error",
          error:error.message
       })

    }
}


exports.updateSubSection=async(req,res)=>{

}


exports.deleteSubSection=async(req,res)=>{

}