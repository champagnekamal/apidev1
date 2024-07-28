require("dotenv").config();
const express = require('express');
const app = express();
const getallprod = require('./routes/products')
const connectdb = require('./db/connect')



app.get('/',(req,res)=>{
    res.send("learning API development in nodejs")
})      
// middleware

app.use("/api/products",getallprod)


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