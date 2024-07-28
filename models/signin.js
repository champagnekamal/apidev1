const mongoose = require('mongoose')

const Signin = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,default:true},
},
{timestamps:true})

module.exports = mongoose.model('sign',Signin)