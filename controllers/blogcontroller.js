const connectdb =require("../db/connect")
const User = require("../models/user")
const Blogschema = require("../models/Blogschema")
const jwt = require('jsonwebtoken')

const createblog = async(req,res)=>{
    console.log(req,"fnrjknrjrjjt");
    const token = req.header('authorization');
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        // const bearerToken = `Bearer ${token}`;
        // const decoded = await jwt.verify(bearerToken.split(' ')[1], 'shhhhh');
    const {title,content} = req.body

        // req.user = await User.findById(req?.user?._id);
        await connectdb(process.env.MONGODB_URI)
        const blog = new Blogschema({
            title,
           author: req.user._id, // Assuming author is the ID of the user
            content,
            email:req?.user?.email,
            name:req?.user?.name
          })
          await blog.save()
          res.json(blog)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to create blog" })
    }
}

module.exports = {createblog}