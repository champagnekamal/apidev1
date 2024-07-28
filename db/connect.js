const mongoose = require('mongoose')



const connectdb = (uri)=>{
    console.log("db here");
    return mongoose.connect(uri)
}

module.exports = connectdb