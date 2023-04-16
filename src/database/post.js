const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const postSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"UserCredentials"
    },
    likes:[{
        type:ObjectId,
        ref:"UserCredentials"
    }],
    comments:[{
        comment:String,
        postedBy:{type:ObjectId,ref:"UserCredentials"},
        postedAt:{type: Date,default: Date.now}
    }],
    createdAt:{
        type: Date, 
        default: Date.now
    }
})

const PostModel= new mongoose.model("post",postSchema)

module.exports = PostModel