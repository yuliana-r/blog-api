const asyncHandler = require('express-async-handler');

exports.createComment = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Comment create');
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Comment delete');
});
