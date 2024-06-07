import mongoose from "mongoose"
const subtodoSchema = mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:Boolean
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
},{timestamps:true})
export const SubTodo = mongoose.model("SubTodo",subtodoSchema)