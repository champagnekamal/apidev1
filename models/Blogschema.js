const mongoose  = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  }, { timestamps: true });
  
  module.exports = mongoose.model('blog', BlogSchema);