const Category=require('../models/Category');

//create tag handler function
exports.createCategory=async(req,res)=>{
     try{
        //fetch data
          const {name, description}=req.body;

          //validation
          if(!name || !description){
              return res.status(400).json({
                 success:false,
                 message:'All fields are required'
              })
          }

          //create entry in db
          const categoryDetails=await Category.create(
            {
                name:name,
                description:description,
            }
          );
          console.log(categoryDetails);

          //return response
          return res.status(200).json({
            success:true,
            message:"Category created successfully"
          })
     }
     catch(error){
        return res.status(500).json({
            success:false,
            message:error
        })
     }
}


//getAllTags handler function
exports.showAllCategories=async(req , res)=>{
    try{
        const allCategory=await Category.find({},{name:true,description:true});
        res.status(200).json({
            success:true,
            description:'All categories returned successfully',
            data:allCategory
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


//categories page details handler function
exports.categoryPageDetails=async(req,res)=>{
    try{
          //get category id
          const {categoryId}=req.body

          //get all courses for specified category
          const selectedCategory=await Category.findById(categoryId)
                                                .populate("courses")
                                                .exec();

          //validation
          if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:'Courses not found'
            })
          }

          //get courses for different category
          const differentCategories=await Category.find({
                                                          //give me data !== given categoryId
                                                          _id:{$ne :categoryId}
                                                        })
                                                        .populate("courses")
                                                        .exec();                                             

          //get top 10 selling courses


          //return the response
          return res.status(200).json({
            success:true,
            data:{
                selectedCategory,
                differentCategories
            },
            message:'All courses fetched'
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