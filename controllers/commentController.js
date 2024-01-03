const asyncHandler = require("express-async-handler");

exports.comment_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment create");
});

exports.comment_delete = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Comment delete");
});
