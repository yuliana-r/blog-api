const asyncHandler = require("express-async-handler");

exports.user_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User detail");
});

exports.user_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update");
});

exports.user_delete = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User delete");
});
