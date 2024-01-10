const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// GET all posts

exports.getPosts = asyncHandler(async (req, res, next) => {
  allPosts = await Post.find().populate('author').populate('category').exec();
  res.json(allPosts);
});

// GET details for specific post

exports.getPostDetail = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postID)
    .populate('author')
    .populate('category')
    .exec();
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist.' });
  }
  res.status(200).json(post);
});

// CREATE new post

exports.createPost = asyncHandler(async (req, res, next) => {
  // if (!req.user.isAdmin) {
  //   res
  //     .status(401)
  //     .json({ message: 'You are not authorised to perform this action' });
  // }

  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    timestamp: new Date(),
    imageURL: req.body.imageURL,
    isPublished: req.body.isPublished,
    author: req.body.author,
    category: req.body.category,
  });

  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE post

exports.updatePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.postID, req.body, {
      new: true,
    })
      .populate('author')
      .populate('category')
      .exec();

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist.' });
    }

    res.json({ message: 'Post updated successfully.', updatedPost: post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE post

exports.deletePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postID);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist.' });
    }

    await Comment.find({
      post: req.params.postID,
    }).deleteMany();

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
