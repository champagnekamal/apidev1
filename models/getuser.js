const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
},
{timestamps:true})

userSchema.methods.getAllUsers = async function() {
    return await Users.find().select('-password');
  };


  const Users = mongoose.model('User', userSchema);