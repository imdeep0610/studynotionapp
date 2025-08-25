const User=require('../models/User');
const OTP=require('../models/Otp');
const otpGenerator=require('otp-generator');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const Profile=require('../models/Profile');
const mailSender=require('../utils/mailSender');
const {passwordUpdated}=require('../mail/templates/passwordUpdate');
require('dotenv').config();

//send OTP
exports.sendOTP=async(req,res)=>{
   try{
   //fecth email from req body
   const {email}=req.body;

   //check whether user already exist
   const checkUserPresent=await User.findOne({email})

   //if user already exists
   if(checkUserPresent){
       return res.status(401).json({
         success:false,
         message:'User already registered.'
       })
   }

   //if not exist,generate otp
     var otp=otpGenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false
     });
     console.log("Otp generated : ",otp);

     //check otp generated is unique or not
     const result=await OTP.findOne({otp:otp});
     console.log("Result is Generate OTP Func");
	  console.log("OTP", otp);
	  console.log("Result", result);
     while(result){
        otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false
        });
        result=await OTP.findOne({otp:otp})
     }

     const otpPayload={email,otp};

     //create an entry in db for otp
     const otpBody=await OTP.create(otpPayload);
     console.log(otpBody);

     //Return the response
     res.status(200).json({
      success:true,
      message:'OTP sent successfully',
      otp,
     })
   }
   catch(error){
        console.log(error);
        res.status(500).json({
         success:false,
         message:error.message
        })
   }
}


//signup
exports.signUp=async(req,res)=>{
   try{
        //data fecth from req body
   const{
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp
   }=req.body


   //validate the data 
   if(!firstName || !lastName || !email || !password || !confirmPassword || !otp)
      {
         return res.status(403).json({
            success:false,
            message:'All fields are required'
         })
      }

      //match passsword and confirmPassword
      if(password !== confirmPassword){
         return res.status(400).json({
            success:false,
            message:'Password and confirmPassword do not match , please try again'
         })
      }

      //check user exist or not
      const existingUser=await User.findOne({email})
      if(existingUser){
          return res.status(400).json({
            success:false,
            message:'User is already registered'
          })
      }

      //find most recent OTP stored for the user
      const recentOtp=await OTP.find({email}).sort({createdAt:-1}).limit(1);
      console.log(recentOtp)

      //validate OTP
      if(recentOtp.length==0){
        //Otp not found
        return res.status(400).json({
          success:false,
          message:'OTP not found'
        })
      }
      else if(otp!==recentOtp[0].otp){
          //Invalid otp
          return res.status(400).json({
            success:false,
            message:'Invalid OTP'
          })
      }

      //Hash the password
      const hashedPassword=await bcrypt.genSaltSync(password,10);

      //create entry in db
      let approved='';
      approves=== 'Instructor' ? (approved=false) : (approved=true);

      const profileDetails=await Profiler.create({
         gender:null,
         dateOfBirth:null,
         about:null,
         contactNumber:null
      })

      const user=User.create({
         firstName,
         lastName,
         email,
         contactNumber,
         password:hashedPassword,
         accountType,
         additionalDetails:profileDetails._id,
         image:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName} ${lastName}`
      })

      //return the response
      return res.status(200).json({
         success:true,
         message:'User is registered successfully',
         user,
      })
   }
   catch(error){
      console.log(error);
      return res.status(500).json({
         success:false,
         message:"User cannot be registered, please try again"
      })
   }
}


//login
exports.login=async(req,res)=>{
   try{
      //fetch data from req body
      const {email , password}=req.body;

      //validation of data
       if(!email || !password){
         return res.status(403).json({
            success:false,
            message:'All fields are required , please try again'
         })
       }
 
      //check whether user exists or not
        const user=await User.findOne({email}).populate("additionalDetails");
        if(!user){
         return res.status(401).json({
            success:false,
            message:"User is not registered , please signup first"
         })
        }


      //generate JWT, after matching password
       if(await bcrypt.compare(password,user.password)){
         const payload={
            email:user.email,
            id:user._id,
            accountType:user.accountType
         }
          const token=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'2h',
          });
          user.token=token,
          user.password=undefined
       


      //create cookie and send response
      const options={
         expires:new Date(Date.now()+3*24*60*60*1000),
         httpOnly:true
      }
        res.cookie("token",token,options).status(200).json({
          success:true,
          token,
          user,
          message:'Logged in successfully'
        })
      }
      else{
         return res.status(401).json({
            success:false,
            message:'Password is incorrect'
         })
      }
   }
   catch(error){
     console.log(error);
     return res.status(500).json({
      success:false,
      message:'Login failure, please try again'
     })
   }
}



//changePassword
exports.changePassword=async(req,res)=>{
 try{
    
   //get user data from req.user
   const userDetails=await User.findById(req.user.id);

   //get data from req body
     const {
      oldPassword, newPassword,confirmPassword
     }=req.body

   //validate the data
   if(!oldPassword || !newPassword || !confirmPassword){
      return res.status(400).json({
         success:false,
         message:'All fields are required'
      })
   }


    //validate the old password
    const isPasswordMatch=await bcrypt.compare(
                                                oldPassword,
                                                userDetails.password
                                              )
    if(!isPasswordMatch){
    //if old password do not match return response
      return res.status(401).json({
         success:false,
         message:'The password is incorrect'
      })
    }
    
    //match the new password and confirm password
    if(newPassword!==confirmPassword){
       return res.status(400).json({
         success:false,
         message:'The password and confirm password do not match'
       })
    }


   //update the password in db
   const encryptedPassword=await bcrypt.hash(newPassword,10);
   const updatedUserDetails=await User.findByIdAndUpdate(
                                                          req.user.id,
                                                          {password:encryptedPassword},
                                                          {new:true} 
                                                        );

   //send mail-update password
   try{
        const emailResponse=await mailSender(
                                              updatedUserDetails.email,
                                              passwordUpdated(
                                                userDetails.email,
                                                `Password updated successfully for 
                                                ${updatedUserDetails.firstName} 
                                                ${updatedUserDetails.lastName}`
                                              )
                                            );
       console.log("Email sent successfully: ", emailResponse.response)                                     
   } 
   catch(error){
    console.error("Error occurred while sending email:", error);
    return res.status(500).json({
      success:false,
      message:'Error occured while sending email',
      error:error.message
    })
   }

   //return response
   return res.status(200).json({
      success:true,
      message:'Password updated successfully'
   })
 }
 catch(error){
     console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
 }
}