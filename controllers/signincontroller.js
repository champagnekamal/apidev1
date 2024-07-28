require("dotenv").config()
const connectdb = require('../db/connect')
const User = require('../models/user')
var jwt = require('jsonwebtoken');

const signin =async (req,res)=>{

    try {
        const {email,password} = req.body
        await connectdb(process.env.MONGODB_URI)
        const existinguser = await User.findOne({email})
      if(existinguser ){
        if (existinguser.password === password) {
            const token = jwt.sign({ 
                id: existinguser._id, 
                email: existinguser.email 
            }, 'shhhhh', { expiresIn: '1h' });
            res.status(200).json({id:existinguser?._id,name:existinguser.name,email:existinguser?.email, token:token,message: "user logged in" });
        } else {
            res.status(401).json({ message: "invalid password" });
        }
      }
      else {
        res.status(401).json({ message: "user not found" });
    }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
    }

    module.exports  = {signin}