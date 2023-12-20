const asyncHandler = require("express-async-handler");

exports.posts_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post list");
});

exports.post_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post detail");
});

exports.new_post_form_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post create GET");
});

exports.new_post_form_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post create POST");
});

exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post delete GET");
});

exports.post_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post delete POST");
});

exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post update GET");
});

exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post update POST");
});
