const Profile=require('../models/Profile');
const User=require('../models/User');
const {uploadImageToCloudinary}=require('../utils/imageUploader');


exports.updateProfile=async(req,res)=>{
     try{
          //get data
    const {dateOfBirth="" , about="" , contactNumber,gender}=req.body

    //get userId
    const id=req.user.id;
    
    //validation
    if(!contactNumber || !gender || !id){
        return res.status(400).json({
            success:true,
            message:'All fields are required',
        })
    }

    //find Profile
    const userDetails=await User.findById(id);
    const profileDetails=await Profile.findById(userDetails.additionalDetails);

    //update profile
    profileDetails.dateOfBirth=dateOfBirth,
    profileDetails.gender=gender,
    profileDetails.about=about,
    profileDetails.contactNumber=contactNumber,
    await profileDetails.save();

    //return response
    return res.status(200).json({
        success:true,
        message:'Profile updated successfully',
        profileDetails,
    })
     }
     catch(error){
          return res.status(500).json({
            success:false,
            message:error.message,
          })
     }
}


exports.deleteAccount=async(req , res)=>{
    try{
       //get the id
       const id=req.user.id; 

       //check whether id is valid or not
       const userDetails=await User.findById(id);
       if(!userDetails){
           return res.status(404).json({
            success:false,
            message:'User not found'
           })
       }

       //delete profile
       await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})

       //unenroll user from all enroll courses

       //delete user
       await User.findByIdAndDelete({_id:id})


       //return response
       return res.status(200).json({
            success:true,
            message:'Account is deleted successfully',
       })
    }
    catch(error){
          return res.status(500).json({
            success:false,
            message:'User cannot be deleted successfully',
          })
    }
}

exports.getAllUserDetails=async(req , res)=>{
    try{
        //data fecth
        const id=req.user.id;

        //validation and get user detials
        const userDetails=await User.findById(id).populate('additionalDetails').exec();

        //return response
        return res.status(200).json({
            success:true,
            message:'User data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'User cannot be fetched successfully',
        })
    }
}


//update display picture