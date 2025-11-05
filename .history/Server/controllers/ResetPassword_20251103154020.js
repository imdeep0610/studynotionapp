const  User=require('../models/User');
const mailSender=require('../utils/mailSender');
const crypto=require('crypto-js');
const bcrypt=require('bcryptjs');

//resetPasswordToken
exports.resetPasswordToken=async(req,res)=>{
     try{
           //get email from req body
      const email =req.body.email;


     //check user for this email, email validation
       const user=await User.findOne({email:email});
       if(!user){
          return res.status(400).json({
            success:false,
            messgae:`This Email: ${email} is not Registered With Us Enter a Valid Email `,
          })
       }


     //generate token
       const token=crypto.randomBytes(20).toString("hex");


     //update user by adding token and expiration time
       const updatedDetails=await User.findOneAndUpdate(
                                                         {email:email},
                                                        {
                                                            token:token,
                                                            resetPasswordExpires:Date.now() + 3600000,
                                                        },
                                                    {new:true})
     console.log('Details : ',updatedDetails)

     //create url
     const url=`http://localhost:3000/update-password/${token}`

     //send the mail conatining the url
       await mailSender(email,
       "Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		  );
     //return response
     return res.json({
        success:true,
        messgae:'Reset Password link send successfully , please check mail and update password'
     })
     }
     catch(error){
          console.log(error);
          return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset password mail'
          })
     }
}

//reset password
exports.resetPassword=async(req,res)=>{
   //data fecth 
    const {password,confirmPassword,token}=req.body;

   //validation
   if(password!==confirmPassword){
        return res.json({
          success:false,
          message:'Password and Confirm Password Does not Match'
        })
   }

   //get user details from db using token
   const userDetails=await User.findOne({token:token})

   //if no entry-invalid token
     if(!userDetails){
        return res.json({
          success:false,
          message:'Token is invalid'
        })
     }


   //token time check mey be expired also
   if(userDetails.resetPasswordExpires < Date.now()){
       return res.json({
        success:false,
        message:'Token is expired , please regenerate your token'
       })
   }

   //hashed password
    const hashedPassword=await bcrypt.hash(password,10);

   //password update
    await User.findOneAndUpdate(
      {token:token},
      {password:hashedPassword},
      {new : true}
    )
   //return response
   return res.status(200).json({
     success:true,
     message:'Password reset successfull'
   })
}