const connectdb = require('../db/connect')
const Blogs = require('../models/Blogschema')

const getallblogs = async(req,res)=>{
    try {
        const token = req.header('authorization');
        if(!token){
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        else{
            await connectdb(process.env.MONGODB_URI)
            const getblogs = await Blogs.find().sort({ createdAt: -1 })
            res.json(getblogs)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to create blog",data:error })
    }
}

module.exports = {getallblogs}