const jwt = require('jsonwebtoken')


const verifytoken = async(req,res,next)=>{
    try {
        const token = req.headers['authorization']
       
        console.log(token,"erhfvrh");
        if (!token) {
            return res.status(403).json({ msg: 'A token is required for authentication' });
        }
        const bearerToken = `Bearer ${token}`;
        const decoded = await jwt.verify(bearerToken.split(' ')[1], 'shhhhh');
        console.log(decoded,"bnejfbrh");
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({data:error, msg: 'Invalid Token' });
    }
}

module.exports = verifytoken;