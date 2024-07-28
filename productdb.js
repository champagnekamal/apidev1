require("dotenv").config()
const connectdb = require('./db/connect')
const product = require('./models/products')
const Productjson = require('./productdb.json')
const start = async()=>{
try {
    await connectdb(process.env.MONGODB_URI)
    await product.create(Productjson)
    console.log('success');
} catch (error) {
    console.log(error);
} 
}

start()