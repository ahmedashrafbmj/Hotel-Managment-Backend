const mongoose = require("mongoose");



const authLoginSchema = mongoose.Schema(
    {
        email:{
            type:String
        },
        pass:{
            type:String
        }
    }
)

const authModel = mongoose.model('authData',authLoginSchema)

module.exports = authModel;


