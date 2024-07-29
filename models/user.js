const mongoose = require('mongoose')

const CreateUser = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,default:true},
},
{timestamps:true})



module.exports = mongoose.model('user',CreateUser)