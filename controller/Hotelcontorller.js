const res = require("express/lib/response");
const Product  = require("../models/hotelModels")

//  create product--Admin


exports.createrooms = async (req,res,next)=>{
    const product  = await Product.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
}


// get all room



exports.getAllrooms=async(req,res)=>{
    const products= await Product.find();

    res.status(200).json({ success:true,
        products})
 }
// if(this.createrooms===this.getAllrooms){
//    res.status(400).json({
//        success:false,
//        message:"room already exits"
//    })
// }

//  update product


exports.updaterooms = async (req,res,next)=>{
        let product = await product.findById(req.params.id);

        if(!product){
            res.status(500).json({
                success:false,
                message:"product not found"
            })
        }
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidator:true,
            useFindAndNModify:false
        })

        res.status(200).json({
            success:true,
            product
        })
}
 