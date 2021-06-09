const mongoose = require("mongoose");

const blogModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model("Blog", blogModel);
module.exports = Blog;
