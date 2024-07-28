require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors'); 
const getallprod = require('./routes/products')
const usermodel = require('./routes/usermodel')
const resetpassword = require('./routes/resetpassword')
const connectdb = require('./db/connect')

app.use(express.json());
app.use(cors()); 
app.get('/',(req,res)=>{
    res.send("learning API development in nodejs")
})      
// middleware

app.use("/api/products",getallprod)
app.use("/user",usermodel)
app.use("/reset-password",resetpassword)


const PORT = process.env.PORT || 5000

const start = async()=>{
try {   
   
    await connectdb(process.env.MONGODB_URI)
    app.listen(PORT,()=>{ 
        `server is live`,
        console.log(`server is live on port ${PORT}`)
    })
} catch (error) {
    console.log(error);
}
}

start()