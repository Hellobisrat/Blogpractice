import mongoose from "mongoose";
import{Schema, model} from 'mongoose'

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  blogs:[{
    type:mongoose.Types.ObjectId,
    ref:"Blog",
    required:true
}]
})

const User = model("User", userSchema)

export default User;