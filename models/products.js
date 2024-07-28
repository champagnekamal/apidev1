const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:[true,"price is required"]},
    feature:{type:Boolean,default:false},
    rating:{type:Number,default:0},
    createtedAt:{type:Date,default:Date.now},
    company:{type:String,enum:{
        values:['apple','samsung','nokia','huawei'],
        message:"company is not valid"
    }}
})

module.exports = mongoose.model('Product',productSchema)