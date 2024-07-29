const connectdb  = require('../db/connect')
const blogs = require('../models/Blogschema')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const getblog = async(req,res)=>{
try {
    
    await connectdb(process.env.MONGODB_URI)
    const user = await User.findById(req.user._id)
    // console.log(user,"cnrjnej");
    const getblogs = await blogs.find({author:user?._id}).sort({ createdAt: -1 });
    res.json(getblogs)
} catch (error) {
    console.log(error);
}
}

module.exports = {getblog}