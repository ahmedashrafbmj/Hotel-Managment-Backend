const mongoose = require("mongoose")
const { required } = require("nodemon/lib/config")


let productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    pricePerDay:{
        type:Number,
        required : [true,"Please Enter Room Price For One Day"],
    },
    pricePerWeek:{
         type:Number,
         required:[true,"Please Enter Room Price For One Week"]
         
    },
    pricePerMonth:{
         type:Number,
         required:[true,"Please Enter Room Price For One Month"]
    },
    facilities:{
         type:String,
    },
    rating:{
        type:Number,
        default:0
    },
        images:[{
            public_ID:{
                type:String,
                required:true
            },
            Img_Url:{
                type:String,
                required:true
        
            }
    },
  ],
  category:{
      type:String,
      required:[true,"Please Enter Product category"]
  },
 AvailableRoom: {
    type: Number,
    required: [true, "Please Enter Available Romms"],
    // maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  }, 

//   noOfReviews:[{
//       name:{
//           type:String,
//           required:true
//       },
//       rating:{
//           type:Number,
//           required:true
//       },
//       comment:{
//         type:String,
//         required:true
//       }
//   }
// ],
 
//  creayedAt:{
//      type:Date,
//      default:Date.now
//  }


})

module.exports = mongoose.model("product",productSchema)