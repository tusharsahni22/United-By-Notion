const mongoose = require("mongoose")
const validator = require("validator")
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },    
    email:{
        type:String,
        required:true,
        validator(){
            if(!isEmail){
                throw new error("Invaild Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        select: false 
    },
    follower:[{
        type:ObjectId,
        ref:'UserCredentials'
    }], 
    following:[{
        type:ObjectId,
        ref:'UserCredentials'
    }],
    updatedAt:{
        type: Date, 
        default: Date.now },
})

const userCrendtialModel = new mongoose.model("UserCredentials",userSchema)

module.exports = userCrendtialModel