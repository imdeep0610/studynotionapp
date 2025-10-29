const Course=require('../models/Course');
const Category=require('../models/Category');
const User=require('../models/User');
const {uploadImageToCloudinary}=require('../utils/imageUploader');


//create course handler function
exports.createCourse=async(req,res)=>{
try{
    //data fecth
    const {courseName,courseDescription,whatYouWillLearn,price,tag,category,status,instructions}=
    req.body;

    //get thumbnail
    const thumbnail=req.files.thumbnailImage;

    //validation
    if(!courseName || !courseDescription || !price || !whatYouWillLearn || !tag 
        || !thumbnail || !category){
        return res.status(400).json({
            success:false,
            message:'All fields are mandatory'
        })
    }

    if(!status || status===undefined){
        status='Draft';
    }

    //Instructor valiation
    const userId=req.user.id;
    const instructorDetails=await User.findById(userId,{
                                                          accountType:'Instructor'
                                                        });
    console.log("Instructor details : ", instructorDetails);


    if(!instructorDetails){
        return res.status(404).json({
            success:false,
            message:'Instructor details not found'
        })
    }

    //check given tag is valid or not
    const categoryDetails=await Category.findById(category);
    if(!categoryDetails){
         return res.status(404).json({
            success:false,
            message:'Category Details not found'
        })
    }

    //upload image to Cloudinary
    const thumbnailImage=await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);
    console.log(thumbnailImage);

    //create an entry for new course
    const newCourse=await Course.create({
        courseName,
        courseDescription,
        instructor:instructorDetails.id,
        whatWillYouLearn:whatYouWillLearn,
        price,
        tag:tag,
        category:categoryDetails._id,
        thumbnail:thumbnailImage.secure_url,
        status:status,
        instructions:instructions
    })

    //add the new course to the user schema of instructor
    await User.findByIdAndUpdate(
        {_id:instructorDetails._id},
        {
            //new course is added in the instructor course array
            $push:{
                courses:newCourse._id,
            }
        },
        {new:true}
    )

    //update the new course in categories
    await Category.findByIdAndUpdate(
        {_id:category},
        {$push:{
            courses:newCourse._id
        }},
        {new:true}
    )



    return res.status(200).json({
        success:true,
        message:'Course created successfully',
        data:newCourse
    })
}
catch(error){
     return res.status().json({
        success:false,
        message:'Failed to create course',
        error:error.message
     })
}
}


//getAllCourse handler function
exports.showAllCourses=async(req,res)=>{
    try{
        const allCourses=await Course.find({},{
                                               courseName:true,
                                               price:true,
                                               thumbnail:true,
                                               instructor:true,
                                               ratingAndReviews:true,
                                               studentEnrolled:true,
                                            }).populate("instructor")
                                               .exec();
          return res.status(200).json({
            success:true,
            message:'Data fectched for all courses successfully',
            data:allCourses
          })                                     
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Course data is not fetched',
            error:error.message
        })
    }
}


//getCourseDetails handler function
exports.getCourseDetails=async(req , res)=>{
     try{
          //get the course id
          const {courseId}=req.body;

          //find courseDetails
          const courseDetails=await Course.find(
                                                  {_id:courseId}
                                               )
                                               .populate(
                                                {
                                                    path:'instructor',
                                                    populate:{
                                                        path:'additionalDetails'
                                                    }
                                                }
                                               )
                                               .populate('category')
                                               .populate('ratingAndReviews')
                                               .populate(
                                                {
                                                    path:'courseContent',
                                                    populate:{
                                                        path:'subSection'
                                                    }
                                                }
                                               )
                                               .exec();

           //validations
           if(!courseDetails){
                return res.status(400).json({
                    success:false,
                    message:`Couldn't find the course with ${courseId}`
                })
           } 
           
           //return the response
           return res.status(200).json({
            success:true,
            message:'Course details fetched successfully',
            data:courseDetails,
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