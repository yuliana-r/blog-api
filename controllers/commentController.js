const asyncHandler = require("express-async-handler");

exports.comment_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment create GET");
});

exports.comment_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment create POST");
});

exports.comment_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment delete GET");
});

exports.comment_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment delete POST");
});
