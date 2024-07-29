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
const users = require('./models/user')

app.use(express.json());
app.use(cors()); 

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"https://authbyakash.netlify.app",
        methods:["GET","POST"],
    }
})

io.on('connection',(socket)=>{
    console.log(`socket_connected12 ${socket.id}`);

 socket.on("refresh_api",(data)=>{
    socket.broadcast.emit("request_received",data)
 })

socket.on("join_room",(data)=>{
    socket.join(data)
})

    socket.on("send_message", (data) => {
        // console.log(data,"backendreceived");
    socket.to(data.room).emit("receive",data)
    });


    socket.on("user_id", (data) => {
        console.log(data, "backend_received");
        // Find the recipient's socket ID
        const recipientSocketId = users.find((user) => user._id === data.to).socketId;
        // Send the message to the recipient's socket
        io.to(recipientSocketId).emit("receive", data);
      });

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