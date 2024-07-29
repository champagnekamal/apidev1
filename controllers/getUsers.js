const connectdb = require("../db/connect");
const Users = require("../models/user");
const getUser = async(req,res)=>{
    const token = req.header('authorization');
try {
    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    await connectdb(process.env.MONGODB_URI) 
    const user = await Users.findById(req.user._id)
        const users = await Users.find().select('-password')
        const filteredUsers = users.filter(u => u._id.toString() !== user._id.toString())
        res.json(filteredUsers)
} catch (error) {
    console.log(error);
}
}

module.exports = {getUser}