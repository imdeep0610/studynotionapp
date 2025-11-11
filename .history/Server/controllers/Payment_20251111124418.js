const {instance}=require('../config/razorpay');
const User=require('../models/User');
const Course=require('../models/Course');
const mailSender=require('../utils/mailSender');
const {courseEnrollmentEmail}=require('../mail/templates/courseEnrollmentEmail');
const { default: mongoose } = require('mongoose');



//capture the payment and initiate the Razorpay order
exports.capturePayment=async(req,res)=>{
   const {courses}=req.body;
   const userId=req.user.id;

   if(courses.length===0){
      return res.json({
        success:false,
        message:"Please provide course id"
      })
   }
   let totalAmount=0;
   for(const course_id of courses){
       let course;
       try{
         const course=await Course.findById(course_id);
         if(!course){
            return res.status(200).json({
                success:false,
                mesage:"Could not find the course"
            })
         }
         const uid=new mongoose.Types.ObjectId(userId);
         if(course.studentEnrolled.includes(uid)){
            return res.status(200).json({
                success:false,
                message:"Student is already enrolled"
            })
         }
         totalAmount+=course.price
       }
       catch(error){
         console.log(error);
         return res.status(500).json({
          success:false,
          message:error.message
         })
       }
   }

   const options={
    amount:totalAmount*100,
    currency:"INR",
    receipt:Math.random(Date.now()).toString()
   }
   try{
      const paymentResponse=await instance.orders.create(options);
      res.json({
        success:true,
        message:paymentResponse
      })
   }
   catch(error){
      console.log(error);
      return res.statue(500).json({
        success:false,
        message:"Could not initiate order"
      })
   }
}

//payment verification
exports.verifyPayment=async(req,res)=>{
   const razorpay_order_id=req.body?.razorpay_order_id;
   const razorpay_payment_id=req.body?.razorpay_payment_id;
   const razorpay_signature=req.body?.razorpay_signature;
   const courses=req.body?.courses;
   const userId=req.user.id;

   if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !courses || !userId){
         return res.status(200).json({
          success:false,
          message:"Payment failed"
         })
   }

   let body=razorpay_order_id + "|" + razorpay_payment_id;
   const expectedSignature=crypto
                            .createHmac("sha256",process.env.RAZORPAY_SECRET)
                            .update(body.toString())
                            .digest("hex");

   if(expectedSignature === razorpay_signature){
     //enroll the student
     await enrollStudents(courses,userId,res);

     //return response
     res.status(200).json({
      success:true,
      message:"Payment Verified"
     })
   }
    res.status(200).json({
      success:false,
      message:"Payment Failed"
     })
}

const enrollStudents=async(courses,userId,res)=>{
  if(!courses || !userId){
      return res.status(400).json({
        success:false,
        message:"Please provide data for courses or userId"
      })
  }

  for(const courseId of courses){
   try{
       //find the course and enroll the students
   const enrolledCourse=await Course.findByIdAndUpdate(
    {_id:courseId},
    {$push:{studentEnrolled:userId}},
    {new:true}
   );

   if(!enrollStudents){
      return res.status(500).json({
        success:false,
        message:"Course not found"
      })
   }

   //find the student and add the the course to their list of enrolledCourse
   const enrolledStudent=await User.findByIdAndUpdate(userId,
    {$push:{
        courseID:courseId
    }},{new:true})

    //send the mail to students
    const emailResponse=await mailSender(
      enrollStudents.email,
      `Successfully enrolled into ${enrolledCourse.courseName}`,
      courseEnrollmentEmail(enrolledCourse.courseName,`${enrolledStudent.firstName} ${enrolledStudent.lastName}`)
    )

    console.log("Email sent successfully",emailResponse.response);
  }
   
   catch(error){
    console.log(error.message)
   }
  }

// exports.capturePayment=async(req , res)=>{
//     //get courseId and userId
//     const {course_id}=req.body;
//     const userId=req.user.id

//     //validation 

//     //valid courseId
//     if(!course_id){
//        return res.json({
//          success:false,
//          message:'Please provide valid course id'
//        })
//     }

//     //valid courseDetail
//     let course;
//     try{
//          course=await Course.findById(course_id);
//          if(!course){
//             return res.json({
//                 success:false,
//                 message:`Couldn't find the course , please try again`
//             })
//          }

//          //check whether user already pay for same course
//          const uid=new mongoose.Types.ObjectId(userId);
//          if(course.studentEnrolled.includes(uid)){
//              return res.status(200).json({
//                 success:false,
//                 messgae:'Student is already enrolled'
//              })
//          }
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:error.message
//         })
//     }

//     //create order
//     const amount=course.price;
//     const currency='INR';

//     const options={
//         amount:amount*100,
//         currency,
//         receipt:Math.random(Date.now()).toString(),
//         notes:{
//             courseId:course_id,
//             userId
//         }
//     }

//     try{
//          //initiate the payment using Razorpay
//          const paymentResponse=await instance.orders.create(options) //order created
//          console.log(paymentResponse);

//           //return res
//           return res.status(200).json({
//              success:true,
//              courseName:course.courseName,
//              courseDescription:course.courseDescription,
//              thumbnail:course.thumbnail,
//              orderId:paymentResponse.id,
//              currency:paymentResponse.currency,
//              amount:paymentResponse.amount,
//              message:'Order created successfully'
//            })
//     }
//     catch(error){
//         console.log(error);
//         return res.json({
//             success:false,
//             message:'Could not initiate the order'
//         })
//     }
// }


//verifySignature handler function
// exports.verifySignature=async(req , res)=>{
//    //our signature 
//    const webhookSecret='123456';

//    //razorpay signature 
//    const signature=req.headers['x-razorpay-signature'] //key where signature value is present

//    /*razorpay signature comes to us in encrypted form and we cannot decrypte it , so we will
//    encrypt our signature with same process , and then match both the secret keys 
//    Hmac-> function which will encrypt the secret key 
//    sha256 -> algorithm used by Hmac for encrypting it
//    */
//   const shasum=crypto.createHmac("sha256",webhookSecret); //return a Hmac object

//   //change the Hmac object into string
//   shasum.update(JSON.stringify(req.body))

//   //wehenever we run a hashing algorithm on a text , the output we get is called digest
//   const digest=shasum.digest('hex')  //secret key got chnaged into hexadecimal format

//   //match both the keys 
//   if(signature === digest){
//     console.log('Payment is authorized')

//     const {courseId,userId}=req.body.payload.payment.entity.notes

//     try{
//         //fulfill the action

//        //find the course and enroll the student in it
//        const enrolledCourse=await Course.findOneAndUpdate(
//                                                             {_id:courseId},
//                                                             {$push:{studentEnrolled:userId}},
//                                                             {new:true}
//                                                          );
//         if(enrolledCourse){
//             return res.status(500).json({
//                 success:false,
//                 message:'Course not found'
//             })
//         }   
//         console.log(enrolledCourse);  
        
//         //find the student and add the student in list of enrolled students
//         const enrolledStudent=await User.findOneAndUpdate(
//                                                             {_id:userId},
//                                                             {$push:{courses:courseId}},
//                                                             {new:true}
//                                                           );


//         //send the confirmation mail
//         const emailResponse=await mailSender(
//                                                enrolledStudent.email,
//                                                "Congratulations from Study Notion",
//                                                "Congratulations you are onboarded in the new course" 
//                                             );

//         console.log(emailResponse);
//         return res.status(200).json({
//             success:true,
//             message:'Signature verified and course added'
//         })                                    
//     }
//     catch(error){
//       console.log(error);
//       return res.status(500).json({
//         success:false,
//         message:error.message
//       })
//     }
//   }
//   else{
//     return res.status(400).json({
//         success:false,
//         message:'Invalid request'
//     })
//   }
// }