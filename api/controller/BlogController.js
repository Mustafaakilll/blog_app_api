const Blog = require("../model/BlogModel");

exports.allBlogPost = async (req, res) => {
  try {
    const posts = await Blog.find();
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.addBlogPost = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author,
    });
    const newPost = await blog.save();
    res.status(200).json({ data: newPost });
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.deleteBlogPost = async (req, res) => {
  try {
    const id = req.params.blogId;
    const result = await Blog.remove({ _id: id });
    res.status(200).json({ result });
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.updateBlogPost = async (req, res) => {
  try {
    const id = req.params.blogId;
    const result = await Blog.findByIdAndUpdate(id, req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
