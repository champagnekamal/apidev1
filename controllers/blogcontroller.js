const connectdb =require("../db/connect")
const User = require("../models/user")
const Blogschema = require("../models/Blogschema")
const jwt = require('jsonwebtoken')
const {io,socket} = require('../app')

const createblog = async(req,res)=>{
    console.log(req,"fnrjknrjrjjt");
    const token = req.header('authorization');
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        console.log(token,"nrhjfbjrj");
    const {title,content} = req.body

        await connectdb(process.env.MONGODB_URI)
        const blog = new Blogschema({
            title,
           author: req.user._id, // Assuming author is the ID of the user
            content,
            email:req?.user?.email,
            name:req?.user?.name
          })
          await blog.save()
        //  io.emit("request_received",blog)
          res.json(blog)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to create blog" })
    }
}

module.exports = {createblog}