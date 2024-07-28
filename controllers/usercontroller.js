require("dotenv").config()
const connectdb = require('../db/connect')
const User = require('../models/user')

const user =async (req,res)=>{

    try {
        const {name,email,password} = req.body
        await connectdb(process.env.MONGODB_URI)
        const existinguser = await User.findOne({email})
      
            if (existinguser) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }
        
        const newUser = new User({ name, email, password }); 
        await newUser.save(); 
        console.log('success');
        res.json({user:{
            name:name,
            email:email
        }, message: 'User created successfully' });
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user' });
        

    }
    }

    module.exports  = {user}