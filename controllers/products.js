const product = require("../models/products")

const getallProducts = async(req,res)=>{
    const getallData =await product.find(req.query)
    console.log(getallData);
    res.status(200).json({getallData})
}
 
const getallProductstesting =async (req,res)=>{
res.status(200).json({msg:"i am products testing"})
}

module.exports = {getallProducts,getallProductstesting}