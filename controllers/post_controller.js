const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

exports.getPosts = asyncHandler(async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
});

exports.getPostDetail = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post == null) {
    return res.status(404).json({ message: 'Post does not exist.' });
  }
  res.json(post);
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    timestamp: new Date(),
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  try {
    let updatedPost = await Post.findById(req.params.id);
    if (updatedPost == null) {
      return res.status(404).json({ message: 'Post does not exist.' });
    }

    if (req.body.title) {
      updatedPost.title = req.body.title;
    }
    if (req.body.text) {
      updatedPost.text = req.body.text;
    }

    await updatedPost.save();
    res.json({ message: 'Post updated successfully.', updatedPost });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Post does not exist.' });
    }
    await post.deleteOne();
    res.json({ message: 'Post deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
