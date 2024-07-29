require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors'); 
const getallprod = require('./routes/products')
const usermodel = require('./routes/usermodel')
const resetpassword = require('./routes/resetpassword')
const blog = require('./routes/blog')
const connectdb = require('./db/connect')
const http = require('http');
const {Server} = require("socket.io")


app.use(express.json());
app.use(cors()); 

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"https://authbyakash.netlify.app/",
        methods:["GET","POST"],
    }
})

io.on('connection',(socket)=>{
    console.log(`socket connected ${socket.id}`);

 socket.on("send_message",(data)=>{
    socket.broadcast.emit("request_received",data)
 })
})
app.get('/',(req,res)=>{
    res.send("learning API development in nodejs")
})      
// middleware

app.use("/api/products",getallprod)
app.use("/user",usermodel)
app.use("/reset-password",resetpassword)
app.use("/blog",blog)


const PORT = process.env.PORT || 5000

const start = async()=>{
try {   
   
    await connectdb(process.env.MONGODB_URI)
    server.listen(PORT,()=>{ 
        `server is live`,
        console.log(`server is live on port ${PORT}`)
    })
} catch (error) {
    console.log(error);
}
}

start()

module.exports = { io,server };