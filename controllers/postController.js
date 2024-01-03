const asyncHandler = require("express-async-handler");

exports.posts_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post list");
});

exports.post_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post detail");
});

exports.post_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post create");
});

exports.post_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post update");
});

exports.post_delete = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Post delete");
});
