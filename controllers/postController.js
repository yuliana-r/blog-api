const asyncHandler = require('express-async-handler');

exports.getPosts = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Post list');
});

exports.getPostDetail = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Post detail');
});

exports.createPost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Post create');
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Post update');
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Post delete');
});
