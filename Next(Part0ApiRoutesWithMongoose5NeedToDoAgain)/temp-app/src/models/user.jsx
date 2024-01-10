import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:"String",
    password:"String"
},{
    timestamps:true
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User