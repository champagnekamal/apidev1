require("dotenv").config()
const connectdb = require('../db/connect')
const User = require('../models/user')
var jwt = require('jsonwebtoken');


const reset = async(req,res)=>{
    const {email,password} = req.body
    try {
        await connectdb(process.env.MONGODB_URI)
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({ success: false, message: 'User not found' });
        }
user.password = password
await user.save();
res.json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports  = {reset}