const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenticateUser = async (req, res, next) => {
    const token =await req.header('authorization');
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
 console.log(token,"rnjrbrhrgb");
    try {
       console.log(token);
        const bearerToken = `Bearer ${token}`;
     
        const decoded = await jwt.verify(bearerToken.split(' ')[1], 'shhhhh');
     
      req.user = await User.findById(decoded.id);
    //   req.user = decoded.id;
    //   console.log(req.user,"denhjhfebhre");
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };

  module.exports = authenticateUser;