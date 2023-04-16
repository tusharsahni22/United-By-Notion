const mongoose = require("mongoose")
const validator = require("validator")

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
        required:true
    },
    updatedAt:{
        type: Date, 
        default: Date.now },
})

const userCrendtialModel = new mongoose.model("UserCredentials",userSchema)

module.exports = userCrendtialModel