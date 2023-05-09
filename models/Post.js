import mongoose from "mongoose"

const PostSchema=new mongoose.Schema({
    title:String,
    reporter:String,
    date:String,
    cetegory:String,
    content:String,
})
module.exports=mongoose.models.Post|| mongoose.model("Post",PostSchema)