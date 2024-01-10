const asyncHandler = require('express-async-handler');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// GET comments for specific post

exports.getComments = asyncHandler(async (req, res, next) => {
  const [post, postComments] = await Promise.all([
    Post.findById(req.params.postID).exec(),
    Comment.find({ post: req.params.postID })
      .populate('author')
      .populate('post')
      .exec(),
  ]);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist.' });
  }

  res.status(200).json(postComments);
});

// CREATE comment

exports.createComment = asyncHandler(async (req, res, next) => {
  const comment = new Comment({
    text: req.body.text,
    timestamp: new Date(),
    author: req.body.author,
    post: req.params.postID,
  });
  try {
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE comment

exports.deleteComment = asyncHandler(async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentID);

    if (!comment) {
      return res.status(404).json({ message: 'Comment does not exist.' });
    }

    res.status(200).json({ message: 'Comment deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
